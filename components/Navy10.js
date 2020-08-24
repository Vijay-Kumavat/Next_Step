import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Navy10 extends React.Component {
  render() {
    const htmlContenta = `<p><b>Sex :</b>Male/Female (Depending upon the type of job).</p>`;
    const htmlContentb = `<p><b>Nationality :</b>Indian</p>`;
    const htmlContentc = `<p><b>Marital Status :</b>Single</p>`;
    const htmlContent1 = `<p><b>Cousre Details :</b>This is a 4 years long Undergraduate Program. On completion of the program, successful candidates are provided Class 4 Marine Engineer Officer Certificate of Competency. This certificate is awarded by the Ministry of Shipping.After 6 months of sea service, candidates may become Marine Engineers on any Merchant Navy ship!</p>`;
    const htmlContent2= `<p><b>Duration of the Course :</b>Candidate are required to satisfy the age limit criteria. They should be between 17-25 years of age when the course starts.</p>`;
    const htmlContent3 = `<p><b>Educational Qualification :</b>Only 12th Science stream students with Physics, Chemistry and Mathematics subjects, who have successfully cleared the board examinations are eligible to apply for this course. Aggregate marks requirement is 60% marks.</p>`;
    const htmlContent5 = `<p><b>Cousre Details :</b>GME course is a pre-sea training course for Graduates. It is a 1 year long program. On completion of the program, candidates are awarded the Class 4 Marine Engineer Officer Certificate of Competency. This certificate is awarded by the Ministry of Shipping, India.After 6 months of Sea service, candidates may become Marine Engineers on Merchant Navy ships in any part of the World!</p>`;
    const htmlContent6= `<p><b>Duration of the Course :</b>Candidate should be within 28 years of age at the time when the course starts.</p>`;
    const htmlContent7 = `<p><b>Educational Qualification :</b>Only Mechanical Engineering or Naval Architecture Graduates are eligible to apply for this program. Aspirants should also have scored minimum 50% marks in the final year.</p>`;
    const htmlContent9 = `<p><b>Cousre Details :</b>This one is a 3 years long Bachelor of Science Degree course. On completion of the course, candidates are awarded the Second Mates Foreign Going Certificate of Competency. This certificate is awarded by the Ministry of Shipping, India.After 12 months of Sea service, candidates may become Navigation Officers on Merchant Navy ships in any part of the World</p>`;
    const htmlContent10= `<p><b>Duration of the Course :</b>Candidates must be between 17 to 25 years of age at the time when the course starts</p>`;
    const htmlContent11 = `<p><b>Educational Qualification :</b>Only 12th Science stream students with Physics, Chemistry and Mathematics subjects, who have passed board exams, are eligible to appear for this course. Minimum aggregate marks requirement is 60% (in PCM subjects).</p>`;
    const htmlContent13 = `<p><b>Cousre Details :</b>This is a 2 years long pre-sea training course for Diploma holders. On completion of the course, candidates are awarded Class 4 Marine Engineer Certificate of Competency. Ministry of Shipping, India, provides this certificate.After 6 months of Sea service, candidates may become Marine Engineer on Merchant Navy ships in any part of the World.</p>`;
    const htmlContent14= `<p><b>Duration of the Course :</b>Candidates’ age must be within 28 years of age when the course starts.</p>`;
    const htmlContent141 = `<p><b>Educational Qualification :</b>This program is meant for Diploma holders. Diploma holders in Mechanical/Electrical/Naval Architecture/Electrical and Electronics Engineering branches may apply for this course. Candidates must have scored minimum 50% marks in the final year of Diploma course.</p>`;
    const htmlContent16 = `<p><b>Cousre Details :</b>GP Rating stands for General Purpose Rating. It is a 6 months long course. After completion of the course, candidates may join Merchant Navy ships as Deck or Engine crew. Along with sea service, they may also rise through ranks, depending on their performance</p>`;
    const htmlContent17 = `<p><b>Duration of the Course :</b>Between 17 to 25 years of age when the course starts.</p>`;
    const htmlContent18 = `<p><b>Educational Qualification :</b>Candidates must have passed 10th standard examinations from a Recognized board. Minimum marks requirement is 40%.</p>`;
    const htmlContent20 = `<p><b>Cousre Details :</b>Though GP Ratings course covers aspects of deck crew training, separate deck crew training courses are also available. The pre sea training course lasts 6 months.</p>`;
    const htmlContent21= `<p><b>Duration of the Course :</b>Age of the candidate should be between 17½ to 25 years of age.</p>`;
    const htmlContent22 = `<p><b>Educational Qualification :</b>
Minimum qualification required- 10th standard passed (with mathematics, science and English subjects) from a recognized board.Candidate should be fit as per Merchant Shipping rules. Eyesight requirement is 6/6 with no color blindness. This program focuses on deck training only. After course completion, sea service and gaining required certificates, one may join merchant navy ships as part of their deck crew.</p>`;
    const htmlContent24 = `<p><b>Cousre Details :</b>Though GP Ratings course covers aspects of engine crew training, separate engine crew training courses are also available. The pre sea training course lasts 6 months.</p>`;
    const htmlContent25= `<p><b>Duration of the Course :</b>Age of the candidate should be between 17½ to 25 years of age.</p>`;
    const htmlContent26 = `<p><b>Educational Qualification :</b>Minimum qualification required- 10th standard passed (with mathematics, science and English subjects) from a recognized board.Candidate should be fit as per Merchant Shipping rules. Eyesight requirement is 6/6 with no color blindness. This program focuses on engine training only. After course completion, sea service and gaining required certificates, one may join merchant navy ships as part of their engine crew.</p>`;
    const htmlContent28 = `<p><b>Cousre Details :</b>It is a 6 months long pre sea training course. Saloon course focuses on the catering department of a merchant navy ship. It trains students and makes them capable of taking up responsibilities in the catering department aboard merchant navy ships.</p>`;
    const htmlContent29 = `<p><b>Duration of the Course :</b>Age of the candidate should be between 17½ to 25 years of age.</p>`;
    const htmlContent30 = `<p><b>Educational Qualification :</b>Minimum qualification required- 10+2 passed from a recognized board. Some institutes are also known to accept 10th passed students. Candidate should be fit as per Merchant Shipping rules.</p>`;
    const htmlContent32 = `<p><b>Cousre Details :</b>NCV stands for Near Coastal Voyage. It is a 6 months long training program. The initial training program will be followed by 24 months offshore training or 18 months with distance learning program.</p>`;
    const htmlContent33 = `<p><b>Duration of the Course :</b>Candidate should be aged between 17½ to 25 years.</p>`;
    const htmlContent34 = `<p><b>Educational Qualification :</b>Minimum qualification required- 10th standard passed from a recognized board. Candidate should also be fit as per Merchant Shipping rules.</p>`;
    const htmlContent36 = `<p><b>Cousre Details :</b>STCW stands for Standards of Training and Certification of Watchkeeping. This training program is the minimum requirement needed to begin a career aboard a ship! The basic training course consists of 4 modules, Personal Survival Techniques, Fire Prevention and Fire Fighting, Elementary First Aid and Personal Safety & Social Responsibility.Once a candidate successfully completes the 4 basic courses, he/she may go for other advanced technical courses like Passenger Ship Familiarization course.</p>`;
    const htmlContent37 = `<p><b>Duration of the Course :</b>Minimum 16 years of age.</p>`;
    const htmlContent38 = `<p><b>Educational Qualification :</b>10th or 10+2 passed from a recognized board. Candidate should be fit (vision and hearing) as per Merchant Shipping rules.</p>`;
    const htmlContent40 = `<p><b>Cousre Details :</b>Other than B.Sc. Nautical Science course, Diploma version of Nautical Science is another course available on front of merchant navy aspirants. The course followed by 18 months of sea service will lead to 2nd mate foreign going certificate from the Ministry of Shipping, along with a B.Sc. Nautical Science Degree!</p>`;
    const htmlContent41 = `<p><b>Duration of the Course :</b>Upper age limit is 25 years. Candidate should not be more than 25 years of age.</p>`;
    const htmlContent42 = `<p><b>Educational Qualification :</b>
10+2 passed (with Physics, Chemistry, Mathematics and English subjects) from a recognized board or equivalent. Minimum aggregate marks in PCM subjects must not be less than 60%. Marks in English subject in 10th and 12th board exams should not be less than 50%.Candidate should be physically and medically fit as per Merchant Shipping Rules. Candidate should not be color blind. He/she should have 6/6 vision without the assistance of any visual aids.</p>`;
    const htmlContent44 = `<p><b>Cousre Details :</b>If you want an adrenaline filled job, commercial diving will suit you! The job of a commercial diver involves diving under water and performing tasks like survey, welding, cable laying, obstacle spotting and removing, underwater cutting etc.</p>`;
    const htmlContent45 = `<p><b>Duration of the Course :</b>Commercial Diving course trains students and makes them capable of performing the tasks mentioned above. Generally, the training course is 2 months long.</p>`;
    const htmlContent46 = `<p><b>Educational Qualification :</b>10th passed students are eligible to pursue this training course. Candidate must be physically fit. The job involves swimming. If one is a skilled swimmer or is adept at it, it will be an added advantage.</p>`;
    const htmlContent48 = `<p><b>Cousre Details :</b>ETO training course will help eligible candidates become Electrical Officers aboard merchant navy ships. Electrical Officers are responsible for maintaining and supervising all the electrical and electronic equipment present in a ship.ETO course is a pre sea training course. 6 months of sea service after course completion will help you earn the ETO certification</p>`;
    const htmlContent49 = `<p><b>Duration of the Course :</b>
Upper age limit is 35 years. Candidate should not be more than 35 years of age.</p>`;
    const htmlContent50 = `<p><b>Educational Qualification :</b>Diploma or Bachelor’s Degree in Electrical/Electronics/Electrical and Electronics/Electronics and Telecommunication/Communication/Electronics and Instrumentation Engineering. Candidate must also have completed 10+2 Science stream with Physics, Chemistry, Mathematics and English subjects.</p>`;
    const htmlContent52 = `<p><ul>
    <li>B.Sc. Maritime Science</li>
    <li>B.E. or B.Tech. Naval Architecture and Ocean Engineering</li>
    <li>BBA in Shipping Management</li>
    <li>BBA in Logistics and Supply Chain Management</li>
    <li>B.E. or B.Tech. Ocean and Harbour Engineering</li>
    <li>B.Sc. Ship Building and Repair</li>
    <li>B.E. or B.Tech. in Naval Architecture and Offshore Engineering</li>
    <li>LL.B. Maritime Law</li>
    </ul></p>`;
    const htmlContent53 =`<p><b><a href="https://www.apnaahangout.com/army-after-10th-matriculation/">For Other Information !!!<b> click me</b></a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.e}>
          <Image source={require('images/14.png')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <HTMLView value={htmlContenta} stylesheet={styles} />
          <HTMLView value={htmlContentb} stylesheet={styles} />
          <HTMLView value={htmlContentc} stylesheet={styles} />
          <Text style={styles.f}>BE Marine Engineering</Text>
          <HTMLView value={htmlContent1} stylesheet={styles} />
          <HTMLView value={htmlContent2} stylesheet={styles} />
          <HTMLView value={htmlContent3} stylesheet={styles} />
          <Text style={styles.f}>GME Course</Text>
          <HTMLView value={htmlContent5} stylesheet={styles} />
          <HTMLView value={htmlContent6} stylesheet={styles} />
          <HTMLView value={htmlContent7} stylesheet={styles} />
          <Text style={styles.f}>Bsc Nautical Science</Text>
          <HTMLView value={htmlContent9} stylesheet={styles} />
          <HTMLView value={htmlContent10} stylesheet={styles} />
          <HTMLView value={htmlContent11} stylesheet={styles} />
          <Text style={styles.f}>DME Course(Diploma in Marine Engineering)</Text>
          <HTMLView value={htmlContent13} stylesheet={styles} />
          <HTMLView value={htmlContent14} stylesheet={styles} />
          <HTMLView value={htmlContent141} stylesheet={styles} />
          <Text style={styles.f}>GP Rating Course</Text>
          <HTMLView value={htmlContent16} stylesheet={styles} />
          <HTMLView value={htmlContent17} stylesheet={styles} />
          <HTMLView value={htmlContent18} stylesheet={styles} />
          <Text style={styles.f}>Deck Rating Cousre</Text>
          <HTMLView value={htmlContent20} stylesheet={styles} />
          <HTMLView value={htmlContent21} stylesheet={styles} />
          <HTMLView value={htmlContent22} stylesheet={styles} />
          <Text style={styles.f}>Engine Rating Cousre</Text>
          <HTMLView value={htmlContent24} stylesheet={styles} />
          <HTMLView value={htmlContent25} stylesheet={styles} />
          <HTMLView value={htmlContent26} stylesheet={styles} />
          <Text style={styles.f}>Saloon Rating Cousre</Text>
          <HTMLView value={htmlContent28} stylesheet={styles} />
          <HTMLView value={htmlContent29} stylesheet={styles} />
          <HTMLView value={htmlContent30} stylesheet={styles} />
          <Text style={styles.f}>NCV Cousre</Text>
          <HTMLView value={htmlContent32} stylesheet={styles} />
          <HTMLView value={htmlContent33} stylesheet={styles} />
          <HTMLView value={htmlContent34} stylesheet={styles} />
          <Text style={styles.f}>STCW Basic Safety Training</Text>
          <HTMLView value={htmlContent36} stylesheet={styles} />
          <HTMLView value={htmlContent37} stylesheet={styles} />
          <HTMLView value={htmlContent38} stylesheet={styles} />
          <Text style={styles.f}>Diploma in Nautical Science</Text>
          <HTMLView value={htmlContent40} stylesheet={styles} />
          <HTMLView value={htmlContent41} stylesheet={styles} />
          <HTMLView value={htmlContent42} stylesheet={styles} />
          <Text style={styles.f}>Commercial Diving</Text>
          <HTMLView value={htmlContent44} stylesheet={styles} />
          <HTMLView value={htmlContent45} stylesheet={styles} />
          <HTMLView value={htmlContent46} stylesheet={styles} />
          <Text style={styles.f}>Electro Technical Officer(ETO) Course</Text>
          <HTMLView value={htmlContent48} stylesheet={styles} />
          <HTMLView value={htmlContent49} stylesheet={styles} />
          <HTMLView value={htmlContent50} stylesheet={styles} />
          <Text style={styles.f}>Other Relevant Course :</Text>
          <HTMLView value={htmlContent52} stylesheet={styles} />
          <HTMLView value={htmlContent53} stylesheet={styles} />
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
    width: 350,
  },
  p: {
    padding: 10,
    fontSize: 17,
    textAlign:'justify',
  },
});
