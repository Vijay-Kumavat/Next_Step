import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet, Image , Button , ScrollView} from 'react-native';

export default class Biology10 extends React.Component {
  render() {
    const htmlContent = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Syllabus for Class 11 Physics, Maths, Chemistry, English, Biology and all the subjects that come under Science stream has undergone many changes from the past years syllabus.This is due to increased number of subjects and emerging needs of the society.`;
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Students who are willing to pursue for technical and research fields, they have to opt biology stream in Class 11.</p>`;
    const htmlContent2 =`<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How many percent needed in class 11 to take PCM or PCB after class 10?</b></p>`;
    const htmlContent3 =`<p><b><ul><li>You will get Science if you will score 90% above..</li><li>If you will score good in maths and science above 80 out of 100 your school will give you Science they will not see your marks in SST,English or hindi.</li>
<li>But sometimes students who score around 70-80% also get Science.Due to their active performance during class.If you have a good image in front of teachers and you always give answers in your class.You can get Science.</li></ul></b></p>`;
    const htmlContent4 =`<p><b>PCM is easy or not in class 11?</b></p>`;
    const htmlContent5 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PCM is quiet easy in class 11th there is nothing to said tough. They are very interesting but if you are able to manage the time which is the main problem, you are gonna love it!!!</p>`;
    const htmlContent6 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you will have a quick review on the topics of physics you will find it interesting there is a topic from every aspect of physics like electricity , viscosity etc.</p>`;
    const htmlContent7 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chemistry is the most interesting which I think as it majorly contains only physical chemistry. Only last few chapter will be kind of tough that you will find.</p>`;
    const htmlContent8 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biology is always like you have to just do it regularly and nothing will go wrong.</p>`;
    const htmlContent9 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just learn with interest then every thing is easy. I have seen many students which are brilliant in 11th!!! and if the reason is asked they are like "just study regularly" the thing is you have to do your duty the result will be definitely  in your favor!!</p>`;
    const htmlContent10 =`<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's not at all about hours ,you should decide topics to cover a day. I would suggest you not to count hours it will distract you ,count the amount of matter you have studied and amount remaining ,the remaining amount of study will stress you and motivate to study more . You jst need a good plan, divide the topics considering exam ahead. Try to study regularly so that you will not face last min rush towards studies. Stay focused stay determined. Set a goal,challenge yourself and work for it.</p>`;
    const htmlContent11 =`<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For science subjects , 70 marks is for written theory paper and 30 marks for practicals already conducted in jan or Feb. Altogether you need to score 35 marks out of 100.There is no individual cutoff for theory and practical.</b></p>`;
    const htmlContent12 =`<p><ul><li>Physics</li><li>Chemistry</li><li>English</li><li>Biology</li><li>Biotechnology</li><li>Computer Science/Hindi/Sanskrit etc.</li></ul></p>`;
    const htmlContent13 =`<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.quora.com/What-are-the-passing-marks-of-12th-science-per-subject">What are the passing marks of 12th science per subject?<b>click me</b></a></p>`;
    const htmlContent14 =`<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go to the After 12 for Other Information of PCB.</b></p>`;
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/9.jpg')} style={styles.d} />
        </View> 
        <View style={styles.container}>
          <Text style={styles.f}>11-12 Science PCB</Text>
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
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'serif',
  },
  f: {
    fontSize: 30,
    margin: 5,
    fontFamily:'serif',
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
