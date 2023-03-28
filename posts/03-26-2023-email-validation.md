---
title: 2 accounts, same email. How?
date: "2023-03-28"
tags: email, authentication
description : How i created multiple accounts with the same email address   
---

## Introduction
Over the years ( since the era of what is called **web 2**), software are built to be dynamic based on users, and users can add, update and delete their contents on the internet, but to do so they have to create/ manage an account within the database of the software they are using.

There are quite several ways they can achieve that but one of the common ways software developer develops their system is for consumers/users to use their email address as an unique identifier, where the user will have to signup/login using their email, and from a sense of view this is one of the best possible way, because it also give a way to get notification , retrieve their account ( as a user) and prevent spam/fake/multiple account as a developer. And the games gets better as developer can now use google auth, microsoft auth and other authentication services to authenticate their user.

I am sure you would now be wondering why would i title this article as **"2 accounts, same email?"** but here is the reason, when a user signup with an email address that email would have to be verified, before it can be stored in the database, and this is to prevent fake account, and also to prevent spam, but now with technology, it is possible to create multiple accounts with the same email address, and this is what i am going to be talking about in this article.

## How to create multiple accounts with the same email address
There are quite several ways to create multiple accounts with the same email address, but i am going to be talking about the most common way, and that is by using an email extension, and i am going to be using gmail as an example.

### How it works ( using Gmail )
After much thought by the gmail team they decided to make it possible for users to add an extension to their email so it can be possible for them to track where their email is coming from ( where they signed up),so if you have an email address like this **someone@gmail.com** some one can send an email to that email with an extension like this **someone+test@gmail.com** and this email will still be delivered to **someone@gmail.com**. This is a very good feature, and some other mailings services like yahoo, outlook, and others have this feature too. But is has some disadvantages ( to the developer as explained in this article ), and one of the disadvantages is that it is possible to create multiple accounts with the same email address, and this is how it works.


Let's say you have an email address like this **someone@gmail.com** and you want to create an account on a website, it is possible for that same user to create another or multiple accounts with the same email address, by adding an extension to the email address. *( i use this a lot to utilize free trials, and i am sure you do too)*.


> An experience i had : 
 I even have a friend who got his first account banned on upwork then we quickly created another account with the same email address but this time with an extension ( **+upwork**), and it worked, but he tried applying for verification on upwork and it seems they noticed that he was using the same email address, and he got banned again, he could try again later and he would have been able to create another account with the same email address but this time with a different extension ( **+upwork2**).

### Why is bad ( for developers ) ?
Like i story about my friend been able to create 2 upwork account with same email address, allowing users to be able to create multiple account with a single email address is not a good idea, because it can be used to create fake account,  also to spam, may affect data analytics ( you won`t want that to happen).

For instance a user created an account on a socail media platform with an email address and the person applied for a verification badge, and the user got verified, but the user decided to create another account with the same email address but this time with an extension, and won`t apply for verification and try to use that opportunity to scam people (all in the name of backup account), and other users(followers) would have high chances of falling for it, and when been scammed they could try to report the user(scammer), but doing that would still make the user have his/her original account, with the verification badge (*not under watch , because that account was not the one reported*), and the user would still be able to scam people by creating another account with the same email address with an extension (maybe after the first spam account was banned), leaving  the whole issue untracable by the website algorithm.

And yes i know they could just create another email and then create a spam account but they are more likely to choose an extension first because they don`t want to go through the stress of managing multiple email and maybe having different mobile numbers incase they want to retrieve their email (change their phone or something).

### How to prevent it from happening in your software
There are quite several ways to prevent it from happening in your software, but i am going to be talking about the way i think is 2 most effective, and that is by using **regex or string methods** to get the normal email, so tha when a user tries to signup with an email address, the email address would be checked to see if it has an extension, and if it has an extension, the user would be notified that they can not use an email address with an extension, and this is how it works.

But i should not stop from using an extension because that was the purpose of the extension ( to be able to track where the email is coming from), so i think the best way to prevent it from happening is by checking if the email has an extension, and if it has an extension, it should remove the extension and use the email without the extension, then check if the email is already in the database, and if it is, the user would be notified that similar email address already exist, and if it is not, the user would be able to signup with that email address.(**with the extension**)

Here is a code example of how it can be done in typescript.

```typescript
const email = params.get('email'); // it could be an email with or without an extension
```

###### **Using regex**
```typescript
// using regex
const normalizedEmail = email.toLowerCase().replace(/\+[^@]+/, '');
console.log(normalizedEmail);
```

###### **Using string`s methods**
```typescript
// using string`s methods
const normalizedEmail = email.toLowerCase().split('+')[0] + "@" + email.split('@')[1];
console.log(normalizedEmail);
```

Then  check if the `normalizedEmail` is already in used in your databased, if in used notify the user else **save the email given by the user to the database and not the `normalizedEmail`**.

## Conclusion
I hope you enjoyed this article, and i hope you learned something new, and i hope you can now prevent it from happening in your software.

Please share and Happy coding.

#### Disclaimers
- All emails used in this article are not mine ( neither do i know anybody who owns them), they are just for educational purposes ( if you want to reach out here is my email : [aniezeoformic@gmail.com](mailto:aniezeoformic+blog@gmail.com))


