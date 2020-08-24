import * as React from 'react';
import HTMLView from 'react-native-htmlview';
import { Text, View, StyleSheet , Image , ScrollView , Button } from 'react-native';

export default class Commerce10 extends React.Component {
  render() {
    const htmlContent = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the second most popular choice among students in India. Commerce stream leads towards some of the highest paying and respected jobs like investment banking, chartered accountant, company secretaries, accounts and financial advisor, etc. The three major subjects taught in commerce stream are economics, accountancy and business law or business study. The subjects offered by most commerce colleges include business economics, business law. accountancy, auditing, income tax, marketing, etc. Just like the above two, even in commerce stream, the student has to select 6 subjects including one compulsory language.</p>`;
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commerce as a stream of education can be defined as a study of trade and business activities such as the exchange of goods and services from producer to final consumer. The main subjects that are taught in the Commerce stream in Class 11 and 12 include Economics, Accountancy and Business Studies. Choose this field if you have a genuine interest in these subjects and have an affinity for numbers, the economy and business.</p>`;
    const htmlContent2 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The important subjects taught in the school curriculum of 11th and 12th are Economics, Accountancy, and Business Studies. Students are advised to choose this field if they have an affinity for numbers and have more interest in business and economy.</p>`;
    const htmlContent3 = `<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The core subjects in the commerce stream are Economics, Business Studies, Mathematics, and Computers. Here too, English is compulsory and you have one language subject as optional. Few of the other elective subjects are Accounting, Informatics Practices, Business Communication, Finance, Statistics, etc.</b></p>`;
    const htmlContent4 = `<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The major subjects covered under the Arts stream are:</b></p>`;
    const htmlContent5 =`<p><ul><li>Accountancy</li><li>Economics</li><li>Business Studies</li><li>Mathematics</li><li>Informatics Practices</li><li>English.</li></ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/11.png')} style={styles.d} />
        </View> 
        <View style={styles.container}>
          <Text style={styles.f}>11-12 Commerce</Text>
          <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
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
    textAlign:'justify',
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
