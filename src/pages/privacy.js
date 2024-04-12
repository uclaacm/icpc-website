import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Image,
    Stack,
    Text,
    List,
    OrderedList,
    ListItem,
    Link,
    Box,
    Flex,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaDiscord,
} from 'react-icons/fa';
import Container from 'components/container';
import { EventCard, EventDescriptionCard } from 'components/eventcard';
// import * as AWS from "aws-sdk";

// const docClient = new AWS.DynamoDB.DocumentClient();

const PrivacyPolicy = (props) => (
    <div className="regionals">
    <Helmet>
      <title>ICPC | ACM ICPC at UCLA</title>
      <meta name="description" content="Our privacy policy." />
      <meta name="keywords" content="competition,regionals,team,acm,icpc,ucla,competitive,programming" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ICPC | ACM ICPC at UCLA" />
      <meta property="og:description" content="Our privacy policy." />
      <meta property="og:url" content="https://icpc.uclaacm.com/icpc" />
      <meta property="og:image" content="https://icpc.uclaacm.com/static/icon/logo256.png" />
      <meta property="og:site_name" content="ACM ICPC at UCLA" />
    </Helmet>
    <Container narrow>
      <Heading as="h1" fontSize={['5xl']} textAlign="center" py={4}>Privacy Policy</Heading>
      <Text style={{ color: 'grey' }} textAlign="center">Last updated March 5, 2024</Text>

      <Stack pb={10} spacing={10} align="center">
        <Stack align="left">
          <Text>This privacy notice for ACM ICPC at UCLA ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:</Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>Visit our website at https://icpc.uclaacm.com, or any website of ours that links to this privacy notice.</ListItem>
            <ListItem>Engage with us in other related ways, including any sales, marketing, or events.</ListItem>
          </List>
          <Text><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at uclaicpc@gmail.com.</Text>
    
          <Heading as="h3" fontSize={['lg', 'xl']}>Summary of Key Points</Heading>
          <Text>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</Text>
          <Text><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us below.</Text>
          <Text><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</Text>
          <Text><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</Text>
          <Text><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information below.</Text>
          <Text><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information below.</Text>
          <Text><strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe below.</Text>
          <Text><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights below.</Text>
          <Text><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</Text>
          <Text>Keep reading to learn more about what we do with any information we collect? </Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">Table of Contents</Heading>
          <OrderedList paddingX="5%">
            <ListItem>WHAT INFORMATION DO WE COLLECT?</ListItem>
            <ListItem>HOW DO WE PROCESS YOUR INFORMATION?</ListItem>
            <ListItem>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</ListItem>
            <ListItem>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</ListItem>
            <ListItem>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</ListItem>
            <ListItem>HOW LONG DO WE KEEP YOUR INFORMATION?</ListItem>
            <ListItem>HOW DO WE KEEP YOUR INFORMATION SAFE?</ListItem>
            <ListItem>WHAT ARE YOUR PRIVACY RIGHTS?</ListItem>
            <ListItem>CONTROLS FOR DO-NOT-TRACK FEATURES</ListItem>
            <ListItem>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</ListItem>
            <ListItem>DO WE MAKE UPDATES TO THIS NOTICE?</ListItem>
            <ListItem>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</ListItem>
            <ListItem>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</ListItem>

          </OrderedList>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">1. WHAT INFORMATION DO WE COLLECT?</Heading>
          <Text textAlign="center"><strong>In Short:</strong> We collect personal information that you provide to us. That is, we do not collect any sensitive information whatsoever. How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws. Want to learn more about what we do with any information we collect? Review the privacy notice in full. We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.<br></br><strong>Sensitive Information:</strong> We do not process sensitive information.</Text>

          <Heading as="h4" fontSize={['md']}>Information Automatically Collected</Heading>
          <Text>In Short: Some information such as your Internet Protocol (IP) address and/or browser and device characteristics is collected automatically when you visit our Services.</Text>
          <Text>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. Like many businesses, we also collect information through cookies and similar technologies.</Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</ListItem>
            <ListItem>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</ListItem>
            <ListItem>Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the</ListItem>
          </List>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">2. HOW DO WE PROCESS YOUR INFORMATION?</Heading>
          <Text>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We currently do not process your information for other purposes.</Text>
          <Text>We process your personal information for a variety of reasons, depending on how you interact with our Services, including: to save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</Heading>
          <Text>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill the legitimate interests of ACM at UCLA.</Text>
          
          <Heading as="h4" fontSize={['md']}>If you are located in the EU or UK, this section applies to you.</Heading>
          <Text>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent by contacting us.</ListItem>
            <ListItem>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</ListItem>
            <ListItem>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</ListItem>
          </List>

          <Heading as="h4" fontSize={['md']}>If you are located in the Canada, this section applies to you.</Heading>
          <Text>We may process your information only if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time. In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</Text>

          <List styleType="disc" paddingX="5%">
            <ListItem>If the collection is solely for journalistic, artistic, or literary purposes.</ListItem>
            <ListItem>If the information is publicly available and is specified by the regulations.</ListItem>
            <ListItem>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way.</ListItem>
            <ListItem>For investigations and fraud detection and prevention.</ListItem>
            <ListItem>For business transactions provided certain conditions are met.</ListItem>
            <ListItem>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim.</ListItem>
            <ListItem>For identifying injured, ill, or deceased persons and communicating with next of kin.</ListItem>
            <ListItem>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse.</ListItem>
          </List>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Heading>
          <Text>In Short: We may share information in specific situations described in this section and/or with the following third parties.</Text>
          <Text>When we use Google Analytics. We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <Link href="https://tools.google.com/dlpage/gaoptout" isExternal>https://tools.google.com/dlpage/gaoptout</Link>. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</Heading>
          <Text>In Short: We may use cookies and other tracking technologies to collect and store your information.</Text>
          <Text>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">6. HOW LONG DO WE KEEP YOUR INFORMATION?</Heading>
          <Text>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</Text>
          <Text>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</Text>
          <Text>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</Heading>
          <Text>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</Text>
          <Text>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>

          
          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">8. WHAT ARE YOUR PRIVACY RIGHTS?</Heading>
          <Text>In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your information at any time.</Text>
          <Text>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</Text>
          <Text>We will consider and act upon any request in accordance with applicable data protection laws.</Text>
          <Text>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member</Text>
          <Text>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</Text>
          <Text>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</Text>
          <Text>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>
          <Text>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>
          <Text>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</Text>
          <Text>If you have questions or comments about your privacy rights, you may email us at uclaicpc@gmail.com.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">9. CONTROLS FOR DO-NOT-TRACK FEATURES.</Heading>
          <Text>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</Heading>

          <Text>In Short: If you are a resident of Colorado, Connecticut, Utah, Virginia or California, you are granted specific rights regarding access to your personal information.</Text>
          <Heading as="h4" fontSize={['md']}>What categories of personal information do we collect?</Heading>

          <Text>We have collected the following categories of personal information in the past twelve (12) months (i.e. none). <br></br>The following lists the broad category of the information, and whether or not we collect them:</Text>
          <OrderedList styleType="upper-alpha" wdith="90%">
            <ListItem>Identifiers: <strong>NO</strong></ListItem>
            <ListItem>Personal information as defined in the California Customer Records statue: <strong>NO</strong></ListItem>
            <ListItem>Protected classification characteristics under state or federal law: <strong>NO</strong></ListItem>
            <ListItem>Commercial information: <strong>NO</strong></ListItem>
            <ListItem>Biometric information: <strong>NO</strong></ListItem>
            <ListItem>Internet or other similar network activity: <strong>NO</strong></ListItem>
            <ListItem>Geolocation data: <strong>NO</strong></ListItem>
            <ListItem>Audio, electronic, visual themal, olfactory, or similar information: <strong>NO</strong></ListItem>
            <ListItem>Professional or employment-related information: <strong>NO</strong></ListItem>
            <ListItem>Education information: <strong>NO</strong></ListItem>
            <ListItem>Information drawn from collected personal information: <strong>NO</strong></ListItem>
            <ListItem>Sensitive personal information: <strong>NO</strong></ListItem>
          </OrderedList>
          <Text>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>Receiving help through customer support</ListItem>
            <ListItem>Participation in customer surveys or contests; and</ListItem>
            <ListItem>Facilitation in the delivery of our Services and to respond to your inquiries.</ListItem>
          </List>

          <Heading as="h4" fontSize={['md']}>How do we use and share your personal information?</Heading>
          <Text>Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</Text>

          <Heading as="h4" fontSize={['md']}>Will your personal information be shared with anyone else?</Heading>
          <Text>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</Text>
          <Text>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</Text>
          <Text>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</Text>

          <Heading as="h4" fontSize={['md']}>California Residents</Heading>
          <Text>California Civil Code Section 1798.83, also known as the "Shine The Light" law permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</Text>
          <Text>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</Text>

          <Text><strong>CCPA Privacy Notice</strong></Text>
          <Text>This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</Text>
          <OrderedList paddingX="5%">
            <ListItem>every individual who is in the State of California for other than a temporary or transitory purpose and</ListItem>
            <ListItem>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</ListItem>
          </OrderedList>
          <Text>All other individuals are defined as "non-residents." If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</Text>

          <Text><strong>Right to request deletion of the data - Request to delete</strong></Text>
          <Text>You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</Text>

          <Text><strong>Right to be informed - Request to know</strong></Text>
          <Text>Depending on the circumstances, you have a right to know:</Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>whether we collect and use your personal information;</ListItem>
            <ListItem>the categories of personal information that we collect;</ListItem>
            <ListItem>the purposes for which the collected personal information is used;</ListItem>
            <ListItem>whether we sell or share personal information to third parties;</ListItem>
            <ListItem>the categories of personal information that we sold, shared, or disclosed for a business purpose;</ListItem>
            <ListItem>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</ListItem>
            <ListItem>the business or commercial purpose for collecting, selling, or sharing personal information; and</ListItem>
            <ListItem>the specific pieces of personal information we collected about you.</ListItem>
          </List>
          <Text>In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re- identify individual data to verify a consumer request.</Text>

          <Text><strong>Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</strong></Text>
          <Text>We will not discriminate against you if you exercise your privacy rights.</Text>

          <Text><strong>Right to Limit Use and Disclosure of Sensitive Personal Information</strong></Text>
          <Text>We do not process consumer's sensitive personal information.</Text>

          <Text><strong>Verification Process</strong></Text>
          <Text>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</Text>
          <Text>We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</Text>

          <Text><strong>Other Privacy Rights</strong></Text>
          <List styleType="disc" paddingX="5%">
            <ListItem>You may object to the processing of your personal information.</ListItem>
            <ListItem>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</ListItem>
            <ListItem>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</ListItem>
            <ListItem>You may request to opt out from future selling or sharing of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission.</ListItem>
          </List>
          <Text>To exercise these rights, you can contact us by submitting a data subject access request, by email at uclaicpc@gmail.com, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">11. DO WE MAKE UPDATES TO THIS NOTICE?</Heading>
          <Text>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Heading>
          <Text>If you have questions or comments about this notice, you may email us at uclaicpc@gmail.com</Text>

          <Heading as="h2" fontSize={['lg', 'xl']} textAlign="center">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Heading>
          <Text>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, ordelete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</Text>

        </Stack>
      </Stack>
    </Container>
  </div>
);

export default PrivacyPolicy; 