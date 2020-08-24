import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Airforce10 extends React.Component {
  render() {
    const htmlContenta = `<p><b>Sex :</b>Male/Female (Depending upon the type of job).</p>`;
    const htmlContentb = `<p><b>Nationality :</b>Indian</p>`;
    const htmlContentc = `<p><b>Marital Status :</b>Single</p>`;
    const htmlContent1 = `<p>Working in the Indian Air Force (IAF) is about being in the middle of supersonic jets, state-of-the-art technology and best of the people. You are where the action is. Air Force provides you with the most modern facilities and gives you an unparalleled way of life and creates an environment, where the best in you comes out.
    Whether you are a graduate or you have finished your schooling or you have passed your class tenth, Indian Air Force has an exciting career opportunity for you. You can join the Indian Air force to jump start a secure future for you and your family. However IAF focuses solely on the prospects for graduates.
</p>`;
    const htmlContent2= `<p><b>One can join the Indian Air Force as an officer in the flying, technical or the ground duty branches depending on his/her educational qualification. These three branches of the IAF have further sub-streams:</b></p>`;
    const htmlContent3 = `<p><b>Flying Branch : Fighter pilots, Transport pilots, Helicopter pilots - You would be working as any of these pilots both during peace and war. You can get into the flying branch as a graduate [through CDS exam (men), through AFCATexam (men & women), through NCC special entry (men)]. You can also get in after 10+2 by qualifying the NDA/ NA exam.</p>`;
    const htmlContent6= `<p><b>Technical Branch :</b>Mechanical, Electronics - You would be taking care of some of the most sophisticated equipments in the world - You can get into this branch through the exam, AFCAT or through University Entry Scheme (UES.)</p>`;
    const htmlContent7 = `<p><b>Ground Duty Branch : Administration, Accounts, Logistics, Education, Meteorology - As part of these mentioned departments, you would be looking after and maintaining human & material resource/ managing funds, work as internal auditors/ work as air traffic controller or fighter controller. You can get into this branch by qualifying AFCAT.</p>`;
    const htmlContent10= `<p><b>For Officer :</b></p>`;
    const htmlContent11 = `<p><ul>
<li>16 ½ to 19 years (candidates applying for NDA)</li>
<li>19 to 23 years (for graduate individuals in flying branch)</li>
<li>18 to 28 years (for graduate individuals in technical branch)</li>
<li>20 to 23 years (for graduate individuals in ground duty branches)</li>
<li>19 to 23 years (for engineering graduates in flying branch)</li>
<li>18 to 28 years (for engineering graduates in technical branch)</li>
<li>20 to 25 years (for engineering graduates in ground duty branches)</li>
<li>18 to 28 years (for post-graduate individuals in technical branch)</li>
<li>20 to 25 years (for post-graduate individuals in ground duty branches)</li>
</p>`;
    const htmlContent13 = `<p><b>For Airmen :</b></p>`;
    const htmlContent14= `<p><ul>
<li>16-20 years (positions available for candidates with matriculation or below)</li>
<li>16-22 years (positions available for candidates with intermediate qualification)</li>
<li>16-22 years (positions available for candidates with diploma qualification)</li>
<li>20-25 years (positions available for graduate individuals)</li>
<li>20-28 years (positions available for post-graduate individuals)</li></p>`;
    const htmlContent15 =`<p><b><a href="http://www.indiaeducation.net/careercenter/armed-forces/indian-air-force/">For Other Information !!!<b> click me</b></a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.e}>
          <Image source={require('images/16.jpg')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContentb} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContentc} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <Text style={styles.f}>IAF Airman Eligibility Criteria</Text>
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent13} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent14} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent15} stylesheet={styles} />
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
