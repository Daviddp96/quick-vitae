import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import exampleData from "../../exampleData";
import ResumePDF from "../../components/ResumePDF/ResumePDF";

const PreviewPage = ({
    profilePicture, 
    personalData, 
    experiences,
    education,
    skills,
    colors,
    fontFamily,
    language
}) => {
    return (
        <section className="preview-section">
            <div className="preview-download">
                <PDFDownloadLink
                    document={
                        <ResumePDF
                            picture={profilePicture || exampleData.profilePicture}
                            firstName={personalData.firstName}
                            lastName={personalData.lastName}
                            headline={personalData.headline}
                            email={personalData.email}
                            phone={personalData.phone}
                            site={personalData.site}
                            experiences={experiences || exampleData.experience}
                            education={education || exampleData.education}
                            skills={skills || exampleData.skills}
                            colors={colors}
                            fontFamily={fontFamily}
                        />
                    }
                    fileName={personalData.firstName ? `[eng]-${personalData.firstName}.pdf` : 'Vitae.pdf'}
                    className="button cta-button preview-button"
                >
                    Download PDF
                </PDFDownloadLink>
            </div>
            <PDFViewer
                width={'100%'}
                height={'100%'}
                className='viewer'
            >
                <ResumePDF 
                    picture={profilePicture || exampleData.profilePicture}
                    firstName={personalData.firstName}
                    lastName={personalData.lastName}
                    headline={personalData.headline}
                    email={personalData.email}
                    phone={personalData.phone}
                    site={personalData.site}
                    experiences={experiences || exampleData.experience}
                    education={education || exampleData.education}
                    skills={skills || exampleData.skills}
                    colors={colors}
                    fontFamily={fontFamily}
                    language={language}
                />
            </PDFViewer>
        </section>
    );
};

export default PreviewPage;