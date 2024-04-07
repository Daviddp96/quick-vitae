// This component looks horrible but I couldn't find a way to split into components
// Crashes if I try to take a View element and return it in another file
import RobotCondensedBold from '../../fonts/RobotoCondensed-Bold.ttf';
import RobotoCondensedRegular from '../../fonts/RobotoCondensed-Regular.ttf';
import LatoBold from '../../fonts/Lato-Bold.ttf';
import LatoRegular from '../../fonts/Lato-Regular.ttf';
import PoppinsBold from '../../fonts/Poppins-Bold.ttf';
import PoppinsRegular from '../../fonts/Poppins-Regular.ttf';

import { Font } from '@react-pdf/renderer';
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Svg,
    Path,
    Image,
    Link,
} from "@react-pdf/renderer";

Font.register({
    family: 'RobotoCondensed',
    fonts: [
        {src: RobotoCondensedRegular},
        {src: RobotCondensedBold, fontStyle: 'bold'}
    ]
});

Font.register({
    family: 'Lato',
    fonts: [
        {src: LatoRegular},
        {src: LatoBold, fontStyle: 'bold'}
    ]
});

Font.register({
    family: 'Poppins',
    fonts: [
        {src: PoppinsRegular},
        {src: PoppinsBold, fontStyle: 'bold'}
    ]
});

const styles = StyleSheet.create({
    body: {
        fontFamily: "RobotoCondensed",
        flexDirection: "row",
        fontSize: 8,
        lineHeight: 1.4,
        color: '#444440'
    },
    side: {
        width: "27vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "#0B486B" // Remember to make configurable, so migrate this property into component
    },
    main: {
        width: "100%",
        padding: 25,
        paddingTop: 0,
        paddingLeft: 0
    },
    header: {
        marginTop: 25,
        marginBottom: 30
    },
    flexCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        position: "relative",
        right: 16,
        maxWidth: "100%",
        width: 145,
        height: 145,
        objectFit: "cover",
        borderRadius: "50%",
        marginRight: 0
    },
    name: {
        color: '#0B486B',
        fontSize: 28,
        fontStyle: "bold",
        lineHeight: 1,
        textTransform: "uppercase",
        marginBottom: 8,
        letterSpacing: 1,
        position: 'relative',
        right: 1
    },
    headline: {
        marginBottom: 8,
        letterSpacing: 2,
        fontSize: 17,
        textTransform: "uppercase",
        color: '#444440' /* Remember to make this configurable */
    },
    icon: {
        marginRight: 8,
        display: "block",
    },
    section: {
        position: 'relative',
        marginBottom: 35
    },
    sectionTitleContainer: {
        position: 'relative',
        flexDirection: "row",
        paddingBottom: 0,
        marginBottom: 5,
    },
    sectionTitleDecoration: {
        position: 'absolute', 
        left: 115, 
        top: 5, 
        backgroundColor: 'white', /* Make configurable */
        width: 37, 
        height: 8
    },
    sectionTitleText: {
        fontStyle: 'bold',
        letterSpacing: 1,
        marginLeft: 150, 
        fontSize: 18, 
        textTransform: 'uppercase', 
        color: '#0B486B', 
        borderBottom: 'none'
    },
    sectionEntry: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        marginTop: 0
    },
    entryLeft: {
        marginRight: 25,
        maxWidth: '60vw',
        textAlign: 'center', 
        height: '100%',
        marginBottom: 5
    },
    company: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontStyle: 'bold',
        letterSpacing: 0.2,
        fontSize: 13,
        marginTop: 10
    },
    duration: {
        marginTop: 2,
        maxWidth: '60vw',
        fontSize: 10
    },
    contract: {
        marginTop: 2,
        maxWidth: '60vw',
        fontSize: 10
    },
    entryRight: {

    }
});

const ResumePDF = ({
    picture,
    firstName,
    lastName,
    headline,
    email,
    phone,
    site,
    experiences,
    education,
    skills,
    colors,
    fontFamily = 'RobotoCondensed',
    language
}) => {
    const currentLanguage = language;
    console.log(currentLanguage);

    return (
        <Document>
            {/* PDF Body */}
            <Page style={[styles.body, {fontFamily: fontFamily, backgroundColor: colors.documentColor, color: colors.rightTextColor}]} size="LEGAL">
                {/* Blue column */}
                <View style={[styles.side, {backgroundColor: colors.sidebarColor}]} fixed={true}></View>
                {/* Main content */}
                <View style={styles.main}>
                    {/* Header section */}
                    <View style={[styles.header, styles.flexCenter, {paddingLeft: 25}]} fixed={true}>
                        {/* Image */}
                        <Image src={picture} style={styles.image} /> {/* Remember to add conditional rendering here */}
                        {/* Personal Details */}
                        <View>
                            <Text style={[styles.name, {color: colors.firstNameColor}]}> {/* First name */}
                                {firstName}
                            </Text>
                            <Text style={[styles.name, {color: colors.lastNameColor}]}> {/* Lastname */}
                                {lastName}
                            </Text>
                            <Text style={[styles.headline, {color: colors.headlineColor}]}> {/* Headline */}
                                {headline}
                            </Text>
                            <View style={[styles.flexCenter, {marginTop: 1, position: 'relative', left: 5.5, fontSize: 10, color: colors.contactTextColor}]}> {/* Icon container */}
                                <Svg width="14" height="14" viewBox="0 0 512 512" style={styles.icon}>
                                    <Path
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                        fill={colors.contactIconColor}
                                    />
                                </Svg>
                                <Text>{email}</Text>
                            </View>
                            <View style={[styles.flexCenter, {marginTop: 5, position: 'relative', left: 5.5, fontSize: 10, color: colors.contactTextColor}]}> {/* Icon container */}
                                <Svg width="14" height="14" viewBox="0 0 512 512" style={styles.icon}>
                                    <Path
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                        fill={colors.contactIconColor}
                                    />
                                </Svg>
                                <Text>{phone}</Text>
                            </View>
                            <View style={[styles.flexCenter, {marginTop: 5, position: 'relative', left: 5.5, fontSize: 10, color: colors.contactTextColor}]}> {/* Icon container */}
                                <Svg width="14" height="14" viewBox="0 0 512 512" style={styles.icon}>
                                    <Path
                                        d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                                        fill={colors.contactIconColor}
                                    />
                                </Svg>
                                <Text>{site}</Text>
                            </View>
                        </View>
                    </View>
                    {/* Experience section */}
                    <View style={styles.section}>
                        {/* Section Title */}
                        <View style={[styles.sectionTitleContainer, {paddingLeft: 25}]}>
                            <Text style={[styles.sectionTitleDecoration, {backgroundColor: colors.sectionDecorationColor}]}></Text>
                            <Text style={[styles.sectionTitleText, {color: colors.sectionTitleColor}]}>Experience</Text>
                        </View>
                        {/* Section Data */}
                        {experiences.map((experience, index) => (
                            /* Section entry */
                            <View style={styles.sectionEntry} key={index}>
                                {/* Entry Left */}
                                <View style={styles.entryLeft} fixed={true}>
                                    {/* Entry Left Text Wrapper */}
                                    <View style={{textAlign: 'right', color: 'white', minWidth: '25vw', maxWidth: '25vw', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        {/* Company */}
                                        <View style={[styles.company, {flexDirection: 'row', flexWrap: 'wrap', justifyContent: "flex-end"}]}>
                                            <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                                                {experience.company.split(' ').map((part, index) => (
                                                    <Text>
                                                        {index === experience.company.length - 1 ? part : `${part} `}
                                                    </Text>
                                                ))}
                                            </View>
                                        </View>
                                        {/* Duration */}
                                        <Text style={styles.duration}>
                                            {experience.startDate} - {experience.endDate}
                                        </Text>
                                        {/* Contract */}
                                        <Text style={styles.contract}>
                                            {experience.contract}
                                        </Text>
                                    </View>
                                </View>
                                {/* Entry Right */}
                                <View style={styles.entryRight}>
                                    <Text style={{marginTop: 10, fontSize: 12, fontStyle: 'bold', letterSpacing: 0.2}}>
                                            {experience.role}
                                    </Text>
                                    <Text style={{maxWidth: '68vw', textAlign: 'justify', fontSize: 11}}>
                                            {experience.summary}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    {/* Education section */}
                    <View style={styles.section}>
                        {/* Section Title */}
                        <View style={[styles.sectionTitleContainer, {paddingLeft: 25}]}>
                            <Text style={[styles.sectionTitleDecoration, {backgroundColor: colors.sectionDecorationColor}]}></Text>
                            <Text style={[styles.sectionTitleText, {color: colors.sectionTitleColor}]}>Education & Certificates</Text>
                        </View>
                        {/* Section Data */}
                        {education.map((education, index) => (
                            /* Section entry */
                            <View style={styles.sectionEntry} key={index}>
                                {/* Entry Left */}
                                <View style={styles.entryLeft} fixed={true}>
                                    {/* Entry Left Text Wrapper */}
                                    <View style={{textAlign: 'right', color: colors.leftTextColor, minWidth: '25vw', maxWidth: '25vw', flexDirection: 'column', alignItems: 'flex-end'}}>
                                        {/* Company */}
                                        <View style={[styles.company, {flexDirection: 'row', flexWrap: 'wrap', justifyContent: "flex-end"}]}>
                                            <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                                                {education.institution.split(' ').map((part, index) => (
                                                    <Text>
                                                        {index === education.institution.length - 1 ? part : `${part} `}
                                                    </Text>
                                                ))}
                                            </View>
                                        </View>
                                        {/* Duration */}
                                        <Text style={styles.duration}>
                                            {education.startDate} - {education.endDate} {/* Conditional */}
                                        </Text>
                                    </View>
                                </View>
                                {/* Entry Right */}
                                <View style={styles.entryRight}>
                                    <Text style={{marginTop: 10, fontSize: 12, fontStyle: 'bold', letterSpacing: 0.2}}>
                                            {education.certification}
                                    </Text>
                                    <Text style={{maxWidth: '68vw', textAlign: 'justify', fontSize: 11}}>
                                            {education.summary}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    {/* Skills section */}
                    <View style={styles.section}>
                        {/* Section Title */}
                        <View style={[styles.sectionTitleContainer, {paddingLeft: 25}]}>
                            <Text style={[styles.sectionTitleDecoration, {backgroundColor: colors.sectionDecorationColor}]}></Text>
                            <Text style={[styles.sectionTitleText, {color: colors.sectionTitleColor}]}>Skills & Software</Text>
                        </View>
                        {/* Section Data */}
                        <View style={{flexDirection: 'row', justifyContent:'flex-start', position: 'relative', left: 170, maxWidth: '69vw', flexWrap: 'wrap'}}>
                            {skills.map((skill, index) => (
                                /* Section entry */
                                <View style={[styles.sectionEntry, {flexDirection: 'row'}]} key={index}>
                                    {/* Entry Right */}
                                    <View style={styles.entryRight}>
                                        <Text style={{marginTop: 10, fontSize: 10, marginLeft: 10}}>
                                                {skill.name}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default ResumePDF;
