import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Arts10 extends React.Component {
  render() {
    const htmlContent = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choosing the Humanities stream after Class 10 would enable a student to choose a career from a range spanning a wide area. Subjects that are available for study in the CBSE class 11 syllabus are History, Geography, Political Science, Psychology, Sociology, English, Hindi and Sanskrit.</p>`;
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defining humanities is a difficult task. However, it can be said in a few words that it is an academic discipline which deals with the study of the ‘Human Condition’, utilizing methodologies that are usually analytical, critical or speculative.</p>`;
    const htmlContent2 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The wide range of subjects that come under the umbrella term of Humanities range from history, languages, literature, law, philosophy, religion, performing arts, anthropology, communication, sociology, psychology and many more.</p>`;
    const htmlContent3 = `<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The major subjects covered under the Arts stream are:</b></p>`;
    const htmlContent4 =`<p><ul><li>History</li><li>Geography</li><li>Political Science</li><li>Psychology</li><li>Sociology</li><li>English</li><li>Hindi</li><li>Sanskrit</li></ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/12.png')} style={styles.d} />
        </View> 
        <View style={styles.container}>
          <Text style={styles.f}>11-12 Arts</Text>
          <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
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
    width: 340,
    height: 200,
  },
  p: {
    padding: 10,
    fontSize: 17,
    textAlign:'justify',
  },
});
