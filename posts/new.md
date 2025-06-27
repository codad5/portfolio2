---
title: Scalability Through Modularization 
date: '2025-06-27'
tags: dev, architecture, scalability
description: How modularization helps build scalable applications without breaking your codebase
image: https://avatars.githubusercontent.com/u/66634814?v=4
published: true
---

## Introduction
When building mini projects, we don't think much about what happens next - when you want to go bigger, how to scale without breaking the codebase or without doing much rewrite.

One thing I always try to do is modularize my code, so that I can easily scale it without breaking the codebase or without having to do much rewrite. I structure the code in a way that each part stands on its own, so I can easily add new features without rewriting the whole codebase.

This is where the real meaning of API comes in. When we mention API, we most times think about HTTP API, but API is not just about HTTP - it's about returning data in a structured way that can be consumed by other parts of the code.

## How Not to Break Your Code
In writing code there is often something to change, upgrade or modify. Let's say you want to get the top x users in your codebase. If you don't utilize the API principle, you would end up writing your logic inline. When your user base scales and you notice that logic takes time to complete, you would have to start doing matching and whole rewriting which can break the code.

How can you avoid that? Modularize your code - break it into smaller pieces with functions that can be called to get the top x users. This way you can easily change the logic without breaking the codebase, as long as the function still **accepts same input and returns same output**.

### Example 1: Initial Slow Logic
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const currentUser: User = {
  id: '123',
  name: 'John Doe',
  email: 'my@email.com'
}

function getTopUsers(users: User[], limit: number): User[] {
  //my slow logic takes 4 seconds to complete for 1000 users
}

function afunctionsThatRequiresMeToGetTopUsers(users: User[], limit: number): User[] {
  ///some old logic
  const topUsers = getTopUsers(users, limit);
  //some other logic that uses the top users
}
```

### Example 2: Adding Fast Logic with Changes Throughout Code
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  subscriptionPlan: 'free' | 'paid';
}

const currentUser: User = {
  id: '123',
  name: 'John Doe',
  email: 'my@email.com',
  subscriptionPlan: 'free'
};

function getTopUsers(users: User[], limit: number): User[] {
  //my slow logic takes 4 seconds to complete for 1000 users
}

function getTopUsersProPlan(users: User[], limit: number): User[] {
  //my fast logic takes 1 second to complete for 1000 users
}

function afunctionsThatRequiresMeToGetTopUsers(users: User[], limit: number): User[] {
  ///some old logic
  let topUsers: User[];
  if (currentUser.subscriptionPlan === 'paid') {
    topUsers = getTopUsersProPlan(users, limit);
  } else {
    topUsers = getTopUsers(users, limit);
  }
  //some other logic that uses the top users
}
```

But there's one problem - imagine I've used that function `getTopUsers` in many parts of the code. Having to put that if logic in all those parts would be stressful and would likely cause bugs.

### Example 3: Better API - No Changes Throughout Code
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  subscriptionPlan: 'free' | 'paid';
}

const currentUser: User = {
  id: '123',
  name: 'John Doe',
  email: 'my@email.com',
  subscriptionPlan: 'free'
}

function getTopUsers(users: User[], limit: number): User[] {
  if (currentUser.subscriptionPlan === 'paid') {
    return getTopUsersProPlan(users, limit);
  } else {
    return getTopUsersFreePlan(users, limit);
  }
}

function getTopUsersProPlan(users: User[], limit: number): User[] {
  // my fast logic takes 1 second to complete for 1000 users
}

function getTopUsersFreePlan(users: User[], limit: number): User[] {
  // my slow logic takes 4 seconds to complete for 1000 users
}

function afunctionsThatRequiresMeToGetTopUsers(users: User[], limit: number): User[] {
  ///some old logic
  const topUsers = getTopUsers(users, limit);
  //some other logic that uses the top users
}
```

This way all other parts of my code automatically adjust to the new logic without having to rewrite the whole codebase.

## File Service Example
Here's another scenario - working on a project for file saving. I'm currently saving files locally and I know I would one day want to move to cloud storage. What did I do? Prepare my API so that as long as I can provide the exact input and return the exact output, I can easily switch to cloud storage without rewriting the whole codebase.

```typescript
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

export interface SaveFileResult {
  fileName: string;
  filePath: string;
  fileUrl: string;
  directory: string;
  fileId: string;
}

export interface SaveFileParams {
  buffer: Buffer;
  fileName: string;
  directory: string;
  baseUrl: string;
  fileExtension?: string;
}

export type StorageServiceType = "local" | "aws_s3"

class FileService {
  private static instances: Map<`${StorageServiceType}_${string}`, FileService> = new Map();
  private baseStoragePath: string;

  private constructor(
    private storage_service: StorageServiceType = 'local',
    baseStoragePath?: string
  ) {
    this.baseStoragePath = baseStoragePath ?? path.join(process.cwd(), 'storage');
    if (this.storage_service === 'local') {
      this.ensureDirectoryExists(this.baseStoragePath);
    }
  }

  static getInstance(
    storage_service: StorageServiceType = 'local',
    baseStoragePath?: string
  ): FileService {
    const key = `${storage_service}_${baseStoragePath ?? 'default'}` as `${StorageServiceType}_${string}`;
    if (!FileService.instances.has(key)) {
      FileService.instances.set(key, new FileService(storage_service, baseStoragePath));
    }
    return FileService.instances.get(key)!;
  }

  async saveFileToDir(params: SaveFileParams): Promise<SaveFileResult> {
    switch (this.storage_service) {
      case 'local':
        return this.saveFileLocally(params);
      case 'aws_s3':
        throw new Error('AWS S3 storage not implemented yet');
      default:
        throw new Error(`Unsupported storage service: ${this.storage_service}`);
    }
  }

  private async saveFileLocally(params: SaveFileParams): Promise<SaveFileResult> {
    const { buffer, fileName, directory, baseUrl, fileExtension } = params;
    const dirPath = path.join(this.baseStoragePath, directory);
    this.ensureDirectoryExists(dirPath);
    const safeFileName = this.generateSafeFileName(fileName, fileExtension);
    const filePath = path.join(dirPath, safeFileName);
    fs.writeFileSync(filePath, buffer);
    const fileUrl = `${baseUrl}/files/${directory}/${safeFileName}`;
    return {
      fileName: safeFileName,
      filePath,
      fileUrl,
      directory,
      fileId: path.parse(safeFileName).name
    };
  }

  private generateSafeFileName(originalName: string, extension?: string): string {
    const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, '_');
    if (extension && !safeName.toLowerCase().endsWith(extension.toLowerCase())) {
      return `${safeName}.${extension.replace(/^\./, '')}`;
    }
    return safeName;
  }

  private ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  getExpressRouteHandler() {
    return async (req: Request, res: Response) => {
      try {
        const { directory, filename } = req.params;
        if (!directory || !/^[a-zA-Z0-9_-]+$/.test(directory)) {
          return res.status(400).json({ error: "Invalid directory parameter" });
        }
        if (!filename || !/^[\w\-_.]+\.[a-zA-Z0-9]+$/.test(filename)) {
          return res.status(400).json({ error: "Invalid filename parameter" });
        }
        const filePath = path.join(this.baseStoragePath, directory, filename);
        if (!fs.existsSync(filePath)) {
          return res.status(404).json({ error: "File not found" });
        }
        const fileExtension = path.extname(filename).toLowerCase();
        const contentType = this.getContentType(fileExtension);
        res.setHeader("Content-Type", contentType);
        res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        fileStream.on('error', (error) => {
          console.error('Error streaming file:', error);
          if (!res.headersSent) {
            res.status(500).json({ error: "Error streaming file" });
          }
        });
      } catch (error) {
        console.error('Error in file route handler:', error);
        if (!res.headersSent) {
          res.status(500).json({ error: "Internal server error" });
        }
      }
    };
  }

  private getContentType(extension: string): string {
    const contentTypes: Record<string, string> = {
      '.pdf': 'application/pdf',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.txt': 'text/plain',
      '.json': 'application/json'
    };
    return contentTypes[extension] || 'application/octet-stream';
  }
}

export default FileService;
export const localFileService = FileService.getInstance('local');
```

Now by just adding the cloud storage logic to the `FileService` class, I can easily switch to cloud storage without rewriting the whole codebase. All I have to do is make sure the function still accepts same input and returns same output.

If I want to switch to AWS, all I would do after adding my logic to the `FileService` class would be to change the storage service type:

```typescript
export const localFileService = FileService.getInstance('aws_s3');
```

Then using VSCode rename (F2 or right-click "Rename Symbol"), I can easily rename the variable across my whole codebase from `localFileService` to `awsS3FileService`.

### Implementing New Cloud Storage
To implement a new cloud storage provider outside of AWS S3:

1. Add the new storage type to `StorageServiceType`
2. Add a new case in the `saveFileToDir` switch statement
3. Implement the private method for that storage provider
4. The method must return the same `SaveFileResult` interface

This makes it incredibly easy to add new cloud storage providers while maintaining the same API contract throughout your application.

## Conclusion
By using the API principle of accepting same input and returning same output, you can easily switch implementations without rewriting your whole codebase. Modularization transforms scaling from a rewrite nightmare into a simple configuration change.

I hope you enjoyed reading this, and I hope you find it helpful. If you have any questions or suggestions, please feel free to reach out to me on:
- [Twitter](https://twitter.com/codad5_)
- [Instagram](https://instagram.com/codad5_)
- [LinkedIn](https://linkedin.com/in/chibueze-aniezeofor)

Thanks for reading, and I hope you have a great day.