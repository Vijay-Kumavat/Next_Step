import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Army10 extends React.Component {
  render() {
    const htmlContenta = `<p><b>Sex :</b>Male/Female (Depending upon the type of job).</p>`;
    const htmlContentb = `<p><b>Nationality :</b>Indian</p>`;
    const htmlContentc = `<p><b>Marital Status :</b>Single</p>`;
    const htmlContent1 = `<p>In this article, we will check out how 10th standard passed students may join the Indian Army. A job in the Indian Army is something that youngsters from India dream about. But many of them don’t have exact knowledge about the selection process, eligibility criteria, types of entrance exams etc. In this article, I’ll clear all those doubts and show you how you may make it to the Army after clearing 10th standard examination.</p>`;
    const htmlContent2= `<p><b>How to join :</b>You have cleared 10th and are looking to land the post of a Commissioned Officer in the Indian Army, just matriculation won’t be sufficient. You’ll have to at least have 10+2 schooling under your belt! This entry is called the NDA (National Defence Academy) entry mode.
    For the NDA entry, one must have 10+2 schooling, like I mentioned above. So, after finishing 10th standard, you may enroll at a school for 10+1 and 10+2, pursue the course and apply for NDA entrance examination. If you manage to clear the examination, you will be called for SSB (Services Selection Board) Interview. If you manage to clear the Interview and make it to the final merit list, you will be given admission at the NDA, Pune! After completing the course at NDA and later on at IMA (Indian Military Academy), Dehradun, you will be Commissioned as an Officer in the Indian Army!.
    Instead of regular 10+2 schooling, you may also go for NIOS’s (National Institute of Open Schooling) 10+2 schooling program too! After completing the course or while still at it, you may appear for the NDA examination!
    Another way to join the Army after 10th is to target the post of a General Duty Soldier. Please note that this is not a Commissioned Officer post. To get into the Indian Army in this way, you may go and attend ‘recruitment camps’ being held at district level by Indian Army! The selection process mostly consists of medical tests, like height, chest measurement etc and some endurance and physical tests like race.</p>`;
    const htmlContent3 = `<p><b>Name of post : Soldier General Duty (All Arms)</b></p>`;
    const htmlContent5 = `<p><b>Eligibility :</b>SSLC / Matric with 45% marks in aggregate and 33% in each subject.No percentage considered in case candidate has passed with higher qualification ie 10+2 and above</p>`;
    const htmlContent6= `<p><b>Age Limit :</b>17½ to 21 years</p>`;
    const htmlContent7 = `<p><b>Name of post : Soldier Tradesmen (All Arms)</b></p>`;
    const htmlContent9 = `<p><b>Eligibility :</b>10th Simple Pass/ ITI (except Syce, Mess Keeper and House Keeper-who may be 8th Simple Pass)</p>`;
    const htmlContent10= `<p><b>Age Limit :</b>17½ to 23 years</p>`;
    const htmlContent11 = `<p><b>Name of post:Soldier (Technical) (Technical Arms, Artillery, Army Air Defence)</b></p>`;
    const htmlContent13 = `<p><b>Eligibility :</b>(a)Sol Tech 10+2/Intermediate Exam pass in Science with Physics, Chemistry, Maths and English with 50% marks in aggregate and 40% marks in each subject.
    (b)Sol Tech (Aviation & Ammunition Examiner) 10 +2 / Intermediate exam pass in Science with Physics, Chemistry, Maths and English with 50% marks in aggregate and 40% marks in each subject. OR 
    Three years Diploma in Engg (Mechanical /Electrical/ Automobiles/ Computer Science Mechanical Engg and Electronic & Instrumentation Engg) from a recognized Polytechnic Institute( No Education relaxation for this category is existing presently)</p>`;
    const htmlContent14= `<p><b>Age Limit :</b>17½ to 23 years</p>`;
    const htmlContent141 = `<p><b>Name of post : Soldier Clerk / Store Keeper Technical (All Arms)</b></p>`;
    const htmlContent16 = `<p><b>Eligibility :</b>10+2 / Intermediate Examination Pass in any stream (Arts, Commerce, Science). Should have secured 50% marks in each subject and 60% in aggregate in Class XII.
Should have studied English and Maths / Accounts / Book Keeping in Class XII or Class X. Should have secured min 50% marks in each of these subject, whether in Class XII or Class X.</p>`;
    const htmlContent17 = `<p><b>Age Limit :</b>17½ to 23 years</p>`;
    const htmlContent18 = `<p><b>Name of post:Soldier Nursing Assistant (Army Medical Corps)</b></p>`;
    const htmlContent20 = `<p><b>Eligibility :</b>10+2 / Intermediate Exam pass in Science with Physics, Chemistry, Biology and English with Minimum 50% marks in aggregate and minimum 40% in each subject.
OR 
    In case the candidate has a BSc Degree with (Botany / Zoology / Bio-Science) and English, the stipulation of percentage in Class-XII is waived off. However, the candidate should have studied all the four specified subjects in Class XII also</p>`;
    const htmlContent21= `<p><b>17½ to 23 years</b></p>`;
    const htmlContent22 = `<p><b>Name of post:Soldier Tradesmen</b></p>`;
    const htmlContent24 = `<p><b>Eligibility :</b>Syce, Mess Keeper and House Keeper who may be 8th Pass.</p>`;
    const htmlContent25= `<p><b>Age Limit :</b>17½ to 23 years</p>`;
    const htmlContent26 = `<p><b>Name of post:Soldier General Duty (All Arms)</b></p>`;
    const htmlContent28 = `<p><b>Eligibility :</b>SSLC / Matric with 45% marks in aggregate and 33% in each subject. No percentage considered in case candidate has passed with higher qualification ie 10+2 and above</p>`;
    const htmlContent29 = `<p><b>Age Limit :</b>17½ to 21 years</p>`;
    const htmlContent30 = `<p><b>Name of post:Soldier Tradesmen (All Arms)</b></p>`;
    const htmlContent32 = `<p><b>Eligibility :</b>10th Simple Pass/ ITI (except Syce, Mess Keeper and House Keeper-who may be 8th Simple Pass).</p>`;
    const htmlContent33 = `<p><b>Age Limit :</b>17½ to 23 years.</p>`;
    const htmlContent34 = `<p><b>Name of post:Soldier (Technical) (Technical Arms, Artillery, Army Air Defence)</b></p>`;
    const htmlContent36 = `<p><b>Eligibility :</b>(a)Sol Tech 10+2/Intermediate Exam pass in Science with Physics, Chemistry, Maths and English with 50% marks in aggregate and 40% marks in each subject.
    (b)Sol Tech (Aviation & Ammunition Examiner) 10 +2 / Intermediate exam pass in Science with Physics, Chemistry, Maths and English with 50% marks in aggregate and 40% marks in each subject. OR Three years Diploma in Engg (Mechanical /Electrical/ Automobiles/ Computer Science Mechanical Engg and Electronic & Instrumentation Engg) from a recognized Polytechnic Institute( No Education relaxation for this category is existing presently)</p>`;
    const htmlContent37 = `<p><b>Age Limit :</b>17½ to 23 years.</p>`;
    const htmlContent38 = `<p><b>Name of post:Soldier Clerk / Store Keeper Technical (All Arms)</b></p>`;
    const htmlContent40 = `<p><b>Eligibility :</b>10+2 / Intermediate Examination Pass in any stream (Arts, Commerce, Science). Should have secured 50% marks in each subject and 60% in aggregate in Class XII. Should have studied English and Maths / Accounts / Book Keeping in Class XII or Class X. Should have secured min 50% marks in each of these subject, whether in Class XII or Class X</p>`;
    const htmlContent41 = `<p><b>Age Limit :</b>17½ to 23 years.</p>`;
    const htmlContent42 = `<p><b>Name of post:
Soldier Nursing Assistant (Army Medical Corps)</b></p>`;
    const htmlContent44 = `<p><b>Eligibility :</b>10+2 / Intermediate Exam pass in Science with Physics, Chemistry, Biology and English with Minimum 50% marks in aggregate and minimum 40% in each subject. OR In case the candidate has a BSc Degree with (Botany / Zoology / Bio-Science) and English, the stipulation of percentage in Class-XII is waived off. However, the candidate should have studied all the four specified subjects in Class XII also</p>`;
    const htmlContent45 = `<p><b>Age Limit :</b>17½ to 23 years.</p>`;
    const htmlContent46 = `<p><b>Name of post:Junior Commissioned Officer Catering (Army Service Corps)</b></p>`;
    const htmlContent48 = `<p><b>Eligibility :</b>10+2 or equivalent exam and Diploma / Certificate Course of a duration of one year or more in Cookery Hotel Management and Catering Technology from a recognized University / Food Craft Institute. AICTE recognition is not mandatory</p>`;
    const htmlContent49 = `<p><b>Age Limit :</b>21 to 27 years.</p>`;
    const htmlContent50 = `<p><b>Name of post:Survey Automated Cartographer (Engineers)</b></p>`;
    const htmlContent51 = `<p><b>Eligibility :</b>BA/BSc with Maths. Must have also passed 12th class(10+2) or equivalent with Maths and Science as main subjects</p>`;
    const htmlContent52 = `<p><b>Age Limit :</b>20 to 25 years.</p>`;
    const htmlContent53 = `<p><b>Name of post:Junior Commissioned Officer Religious Teacher (All Arms)</b></p>`;
    const htmlContent54 = `<p><b>Eligibility :</b>Graduate in any discipline. In addition requisite qualification in his own religious denomination</p>`;
    const htmlContent55 = `<p><b>Age Limit :</b>27 to 34 years.</p>`;
    const htmlContent56 = `<p><b>Name of post:Havildar Education (Army Education Corps)</b></p>`;
    const htmlContent57 = `<p><b>Eligibility :</b>Group X – MA / MSc / MCA or BA / BSc / BCA / BSc (IT) with B Ed Group Y – BSc/BA/BCA/B Sc (IT) (w/o B Ed.)</p>`;
    const htmlContent58 = `<p><b>Age Limit :</b>20 to 25 years.</p>`;
    const htmlContent59 = `<p><b>Details : HomeCareerIndian ArmyIndian Army Clerk Recruitment 2019 Indian Army Clerk Recruitment 2019 Arun Kallarackal  Indian Army  29 Comments . Do you want to become a Clerk in the Indian Army? If yes, this career guide will be of help to you. Here, I’ve provided all the details about Indian Army Clerk recruitment for the term 2019. You will find details such as – vacancy, post details, eligibility, important dates and selection process.
    If you want to become a Clerk in the Indian Army, you must apply for Indian Army’s Soldier recruitment program. Indian Army conducts Open Rally and Soldier recruitment drives to fill up Clerk vacancies.
    12th passed students are eligible to apply for this post. If you have completed 10+2 from a recognized board, you are eligible to become a Clerk in the Indian Army! 12th pass students may also appear for NDA 2019 exam by UPSC.
    The job post called ‘Clerk’ falls under the ‘Soldier’ category. To be precise, the job post is known as Soldier Clerk or Store Keeper Technical (SKT) (All Arms).</b></p>`;
    const htmlContent60 = `<p><b>Eligibility :</b>10+2 / Intermediate Exam pass in any stream (Arts, Commerce, Science) with 60% marks in aggregate and minimum 50% in each subject.Should have studied and passed English and Mathematics / Accounts / Book Keeping in Class X or Class XII with 50% marks in each subject.</p>`;
    const htmlContent61 = `<p><b>Age Limit :</b>Candidate should be between 17½ to 23 years of age.</p>`;
    const htmlContent62 =`<p><b><a href="https://www.apnaahangout.com/army-after-10th-matriculation/">For Other Information !!!<b> click me</b></a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.e}>
          <Image source={require('images/15.jpg')} style={styles.d} />
      </View>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContentb} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContentc} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Text style={styles.f}>Indian Army Soldier</Text>
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent9} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent13} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent14} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent141} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent16} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent17} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent18} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent20} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent21} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent22} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent24} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent25} stylesheet={styles} />
          <Text style={styles.f}>Indian Army JCO and Soldier</Text>
          <HTMLView style={styles.p} value={htmlContent26} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent28} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent29} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent30} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent32} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent33} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent34} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent36} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent37} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent38} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent40} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent41} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent42} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent44} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent45} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent46} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent48} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent49} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent50} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent51} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent52} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent53} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent54} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent55} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent56} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent57} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent58} stylesheet={styles} />
          <Text style={styles.f}>Indian Army Clerk</Text>
          <HTMLView style={styles.p} value={htmlContent59} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent60} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent61} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent62} stylesheet={styles} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'justify',
    fontFamily: 'serif',
  },
  f: {
    fontSize: 30,
    fontWeight:'blod',
    margin:10,
  },
  e: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    padding:10,
  },
  d: {
    width: 340,
    height: 200,
  },
  p: {
    padding: 10,
    fontSize: 17,
    textAlign:'justify',
  },
});
