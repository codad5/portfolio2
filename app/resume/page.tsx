import fs from 'fs';
import path from 'path';
import Footer from '@/app/components/shared/Footer';
import ResumeContent from './ResumeContent';

export const metadata = {
    title: 'Resume - Chibueze Aniezeofor',
    description: 'Professional resume of Chibueze Michael Aniezeofor - Software Engineer.',
};

export default function ResumePage() {
    // Read resume content server-side
    const resumePath = path.join(process.cwd(), 'content', 'resume.md');
    let content = '';
    
    try {
        content = fs.readFileSync(resumePath, 'utf-8');
    } catch (error) {
        content = '# Resume not found\n\nPlease ensure `content/resume.md` exists.';
    }

    // This environment variable is safe to read here in server component
    const pdfLink = process.env.RESUME_PDF_LINK || 'https://drive.google.com/file/d/1Hq0ggN1ItEXV2-Z5aTpRDLzea35D-Tp5/view?usp=drive_link';

    return (
        <div 
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
            <main className="flex-1 py-12 px-4 sm:px-6">
                <ResumeContent content={content} pdfLink={pdfLink} />
            </main>

            <Footer />
        </div>
    );
}
