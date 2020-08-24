import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Iti10 extends React.Component {
  render() {
    const htmlContent = `<p><b>Electrician :</b>There is nothing to explain when you say the word electrician. If you are low skilled and just have completed your matriculation then Electrician is really good ITI course for you.</p>`;
    const htmlContent1 = `<p><b>Fitter :</b>Fitting courses are also available and it is also for low skilled candidates. Fitter’s course for ITI takes at least 2 years and you can start right after your 10th.</p>`;
    const htmlContent2= `<p><b>Carpenter :</b>Carpenter course is also for low skilled candidates and it can be taken up right after matriculation. The ITI course is minimum 2 years long and they teach you how to be a good carpenter.</p>`;
    const htmlContent3 = `<p><b>Foundry Man :</b>Foundry Man is a course for just 1 year. And the minimum qualification that you need to have is just 8th. Yes not even matriculation. So you can imagine it is for less educated candidates.</p>`;
    const htmlContent4 = `<p><b>Book Binder :</b>ITI courses for Book Binder are available in states like Maharashtra and Kerala. The minimum duration of the course could be just 1 year.</p>`;
    const htmlContent5 = `<p><b>Plumber :</b>Plumbing jobs are very high on demand. You can easily get a diploma being a certified plumber. Courses are for 2 years as well as 3 years. You need to decide which one you are going to pick.</p>`;
    const htmlContent6 = `<p><b>Pattern Maker :</b>Pattern Maker is also an Industrial foundry course. You just have to pass 8th standard and the duration of the course is 2 years. The courses are given in 5 states of India.</p>`;
    const htmlContent7 = `<p><b>Mason Building Constructor :</b>Mason Building Constructor is just 1 year long course and you have to be 8th passed. Here you have to do building related work like renovation, mason work etc. Prospects are really great.</p>`;
    const htmlContent8 = `<p><b>Advanced Welding :</b>Welding courses for ITI in India is for 1 year and 2 years. If you have completed your 8th then it is enough take up this ITI course and get a diploma.</p>`;
    const htmlContent9 = `<p><b>Wireman :</b>Wireman jobs are readily available and the course is only for 1 year. You can take up the course right after 8th class.</p>`;
    const htmlContent10 = `<p><b>Sheet Metal Worker :</b>Sheet metal worker job is all about repairing metal products. You just have to 8th passed and more than 15 states in India offer ITI courses for Sheet Metal worker.</p>`;
    const htmlContent11 = `<p><b>Tool and Die Maker :</b>Tool and Die makers is all about chemical engineering however here you just have to learn how to use them. You can get diploma if you complete 1 year course.</p>`;
    const htmlContent12 = `<p><b>Moulder :</b>Moulder is a craftsman moulding vocational ITI courses. Here you have to pass at least matriculation or 10th. And the course is 2 years long given in more than 6 states in India.</p>`;
    const htmlContent13 = `<p><b>Welder Gas and Electric :</b>Welder Gas and Electric is also a vocational training course that requires you to complete 8th standard. If you live in Maharashtra then there are many ITI colleges for this particular course.</p>`;
    const htmlContent14 = `<p><b>Turner :</b>Turner’s could easily be employed at companies like SAIL, GAIL, Goa Shipyard etc. The duration of the course is 2 years and you have to pass 10th standard.</p>`;
    const htmlContent15 = `<p><b>Advanced Tool and Die Making :</b>Diploma in Tool and Die making course could be 3 years long with minimum qualification of 10th. The fees could be up to Rs 20,000/- a year. But the prospects are great.</p>`;
    const htmlContent16 = `<p><b>Painter General :</b>In this ITI course you learn about applying paint, finishing surfaces inside and outside, leveling materials etc. The course is 2 years long with 4 semester and you have to be 8th passed.</p>`;
    const htmlContent17 = `<p><b>Machinist :</b>ITI in Machinist is a course for 2 years and you have to complete 10th or matriculation before you take up the course. The job prospect is really great if you get a diploma.</p>`;
    const htmlContent18 = `<p><b>Draughtsman Mechanical :</b>The ITI course duration for Draughtsman Mechanical is 2 years and you have to pass 10th with science and math. Apprenticeship training could be 3 years long but will be fit for being employed.</p>`;
    const htmlContent19 = `<p><b>Mechanic Machine Tools Maintenance :</b>Mechanic Machine tools Maintenance is bit technical, you have to be 10th pass with science and math. It is also a diploma course with 2 years time period and they teach about machinery and equipment.</p>`;
    const htmlContent20 = `<p><b>Mechanic Computer Hardware :</b>Now following ITI courses are bit technical and you need to have certain educational background. The ITI course for Mechanic Computer Hardware could be 2 years or 3 years long.You have to be 10th pass and courses are available in more than 15 states.</p>`;
    const htmlContent21 = `<p><b>Mechanic Refrigeration and Air Conditioner :</b>The diploma course for mechanic Refrigeration and Air Conditioner could be 1 year long. And you have to be 8th pass. You can easily find a job after completion of this ITI course.</p>`;
    const htmlContent22 = `<p><b>Mechanic Watch and Clock :</b>It is also a yearlong course where you will be taught about repairing watch and clock. The ITI course is available in Kerala. You just have to be 8th pass.</p>`;
    const htmlContent23 = `<p><b>Mechanic Motor Vehicle :</b>As you can see the above four ITI courses in the list and coming four are about Mechanic.The jobs are in high demand for motor mechanics. If you can complete a 2 years long course from any ITI then you can find a job easily.</p>`;
    const htmlContent24 = `<p><b>Machine Tool Maintenance :</b>After 10th this 2 year long ITI course could be great. If you want a diploma in Machine tool maintenance then you have to be 10th pass with science and math.</p>`;
    const htmlContent25 = `<p><b>Mechanic Radio and Television :</b>You must have completed 10th class and your age must be above 16 years. You get a diploma after completing this 2 years course.</p>`;
    const htmlContent26 = `<p><b>Mechanic Diesel :</b>The ITI course for mechanic diesel is 1 year long and you just have to be 8th pass.</p>`;
    const htmlContent27 = `<p><b>Instrument Mechanic :</b>Instrument Mechanic is also a great ITI course. You must get a diploma in this course. The course is 2 years long and you have to be 10th pass.</p>`;
    const htmlContent28 = `<p><b>Instrument Mechanic Chemical Plant :</b>Here you have to deal with chemical plant. The course duration is 2 years and you have to be 10th pass.</p>`;
    const htmlContent29 = `<p><b>Architectural Draughtsman ship :</b>It is better advised that you take up this course which is 3 years long and get a diploma. You have to be 10th pass for this course. The job prospects are really great.</p>`;
    const htmlContent30 = `<p><b>Metrology and Engineering Inspection :</b>Following ITI courses are technical and it requires certain educational background.The diploma course could be 3 years long and you have to be 10th pass before you apply for this course.</p>`;
    const htmlContent31 = `<p><b>Electrical Maintenance :</b>The course duration for electrical maintenance is just 2 years. There are various skills that you will acquire after completing the course. You can be self employed and employed by others also.</p>`;
    const htmlContent32 = `<p><b>Electroplater :</b>Electroplater ITI course is 2 years long with four semesters and you have to be 10th pass. Here you are taught about coating gold, silver, nickel and other metals.</p>`;
    const htmlContent33 = `<p><b>Computer Operator and Programming Assistant :</b>Surprisingly the ITI course duration for computer operator and programming assistant is just 1 year. Here you are introduced about hardware systems, setting control and codes etc. You have to be 10th pass.</p>`;
    const htmlContent34 = `<p><b>Advanced Electronics :</b>Advanced electronics course could be 2 years to 3 years long and you must have completed 10th with science and math. Here you learn about basics of electronics.</p>`;
    const htmlContent35 = `<p><b>Electronic Mechanic :</b>You must have passed matriculation and the ITI course is 2 years long with 4 semesters. You learn everything about electronic equipment.</p>`;
    const htmlContent36 = `<p><b>Network Technician :</b>Network Technician course could be just 6 months long. You get a diploma for learning about networks. You must be 10th pass before applying for the course.</p>`;
    const htmlContent37 = `<p><b>Pre Preparatory School Management Assistant :</b>The duration of Pre Preparatory school management assistant ITI course is just one year with 2 semesters. You must be 10th pass.</p>`;
    const htmlContent38 = `<p><b>Principles of Teaching :</b>Now following courses are really great for women. The course is one year long and you learn about teaching.</p>`;
    const htmlContent39 = `<p><b> Secretarial Practice :</b>The diploma in Secretarial Practice is for 10+2 passed students or graduates. Here you learn typing, basic computer, receptionist’s chore etc.</p>`;
    const htmlContent40 = `<p><b>Baker and Confectioner :</b>The ITI course for Baker and confectioner is just one year long and you have to be 10th pass. After learning this course you can start your own bakery.</p>`;
    const htmlContent41 = `<p><b>Cutting and Sewing :</b>This is really great for women. You just have to be 8th pass and course duration is just 1 year. This ITI course is available in almost every state of the country.</p>`;
    const htmlContent42 = `<p><b>Hair and Skin care :</b>Women can join the ITI diploma course in Hair and Skin. It is just for 1 year and you have to be 10th pass for this course.</p>`;
    const htmlContent43 = `<p><b>Stenography English :</b>This course is also 1 year long and you have to be 10th pass. They teach you shorthand correspondence, reports etc.</p>`;
    const htmlContent44 = `<p><b>CAD CAM :</b>Now following ITI courses are bit technical.
CAD CAM courses can be 1 year long or 2 years long. They are full time courses and you have to be 19th passed.</p>`;
    const htmlContent45 = `<p><b>Desk Top Publishing Operator :</b>The ITI course for Desktop publishing is one year long with 2 semesters. You have to be 10th pass and you learn everything about desktop publishing. Job prospects are really great.</p>`;
    const htmlContent46 = `<p><b>Interior Decoration and Designing :</b>The course could be 1 year long and you have to be 10th passed. You must expect yourself to be self employed if you are taking up this course.</p>`;
    const htmlContent47 = `<p><b>Heat Engine Automobile :</b>This is a lesser known ITI course but you can try if you have interest in automobile and their engine. The course is just 1 year long.</p>`;
    const htmlContent48 = `<p><b>Driver Cum Mechanic Light Motor Vehicle :</b>There is also an ITI course for Driver cum mechanic lighter motor vehicle. The course is just 6 month long and you have to be 10th pass.</p>`;
    const htmlContent49 = `<p><b>Surveyor :</b>The last ITI course in our list is of Surveyor. The course is one year long and you must have completed your 10th.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.e}>
          <Image source={require('images/13.png')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <Text style={styles.f}>Iti Course</Text>
          <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent8} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent9} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent12} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent13} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent14} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent15} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent16} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent17} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent18} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent19} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent20} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent21} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent22} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent23} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent24} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent25} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent26} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent27} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent28} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent29} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent30} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent31} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent32} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent33} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent34} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent35} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent36} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent37} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent38} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent39} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent40} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent41} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent42} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent43} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent44} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent45} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent46} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent47} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent48} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent49} stylesheet={styles} />
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
  },
  f: {
    fontSize: 30,
    margin: 5,
  },
  e: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    padding:10,
  },
  d: {
    width: 350,
    height: 130,
  },
  p: {
    padding: 10,
    fontSize: 17,
    textAlign:'justify',
  },
});
