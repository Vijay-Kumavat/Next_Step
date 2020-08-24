import React, { Component } from 'react';
import HTMLView from 'react-native-htmlview';

import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  AppRegistry,
  Image,
  p,
  ul,
  li,
  b,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native';
import Maths10 from './components/Maths10';
import Biology10 from './components/Biology10';
import MathsBiology10 from './components/MathsBiology10';
import Commerce10 from './components/Commerce10';
import Arts10 from './components/Arts10';
import Iti10 from './components/Iti10';
import Navy10 from './components/Navy10';
import Army10 from './components/Army10';
import Airforce10 from './components/Airforce10';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'AfterSchool',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button title="Home" color="#000" />
            </View>
            <View style={styles.g}>
              <Button
                title="After 10"
                onPress={() => this.props.navigation.navigate('After10')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="After 12"
                onPress={() => this.props.navigation.navigate('After12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Other course"
                onPress={() => this.props.navigation.navigate('Othercourse')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Right Choice ?"
                onPress={() => this.props.navigation.navigate('Rightchoice')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="About App"
                onPress={() => this.props.navigation.navigate('Aboutapp')}
                color="#1e90f4"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class After10Screen extends React.Component {
  static navigationOptions = {
    title: 'After 10',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="11-12 Science"
                onPress={() => this.props.navigation.navigate('Science')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="11-12 Commerce"
                onPress={() => this.props.navigation.navigate('Commerce')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="11-12 Arts"
                onPress={() => this.props.navigation.navigate('Arts')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma Coruse"
                onPress={() => this.props.navigation.navigate('Diploma')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="ITI"
                onPress={() => this.props.navigation.navigate('Iti')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Navy"
                onPress={() => this.props.navigation.navigate('Navy10')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Army"
                onPress={() => this.props.navigation.navigate('Army10')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Airforse"
                onPress={() => this.props.navigation.navigate('Airforce10')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class ScienceScreen extends React.Component {
  static navigationOptions = {
    title: 'After 10',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>11-12 Science</Text>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Maths"
                onPress={() => this.props.navigation.navigate('Maths')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Biology"
                onPress={() => this.props.navigation.navigate('Biology')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Maths-Biology"
                onPress={() => this.props.navigation.navigate('MathsBiology')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class MathsScreen extends React.Component {
  static navigationOptions = {
    title: 'Maths',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Maths10 />
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BiologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Biology',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Biology10 />
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class MathsBiologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Maths-Biology',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <MathsBiology10 />
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class CommerceScreen extends React.Component {
  static navigationOptions = {
    title: 'Commerce',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Commerce10 />
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class ArtsScreen extends React.Component {
  static navigationOptions = {
    title: 'Arts',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Arts10 />
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomaScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma Course',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Popular Course</Text>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Art Teacher Diploma"
                onPress={() =>
                  this.props.navigation.navigate('ArtTeacherDiploma')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Commercial Art Diploma"
                onPress={() =>
                  this.props.navigation.navigate('CommercialArtDiploma')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Stenography"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainStenography')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in 3D Animation"
                onPress={() =>
                  this.props.navigation.navigate('Diplomain3DAnimation')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Beauty care"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainBeautycare')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Cosmetology"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainCosmetology')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Cyber Security"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainCyberSecurity')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Agriculture"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainAgriculture')
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Hotel Management and Catering Technology"
                onPress={() =>
                  this.props.navigation.navigate(
                    'DiplomainHotelManagementandCateringTechnology'
                  )
                }
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma in Commercial Practice"
                onPress={() =>
                  this.props.navigation.navigate('DiplomainCommercialPractice')
                }
                color="#1e90f4"
              />
              <View style={styles.g}>
                <Button
                  title="Diploma in Dental Mechanics"
                  onPress={() =>
                    this.props.navigation.navigate('DiplomainDentalMechanics')
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Diploma in Plastics Technology"
                  onPress={() =>
                    this.props.navigation.navigate(
                      'DiplomainPlasticsTechnology'
                    )
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Diploma in Ceramic Technology"
                  onPress={() =>
                    this.props.navigation.navigate('DiplomainCeramicTechnology')
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Diploma in Engineering"
                  onPress={() =>
                    this.props.navigation.navigate('DiplomainEngineering')
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Diploma in Fire Safety Engineering"
                  onPress={() =>
                    this.props.navigation.navigate(
                      'DiplomainFireSafetyEngineering'
                    )
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Diploma in Fashion Technology"
                  onPress={() =>
                    this.props.navigation.navigate('DiplomainFashionTechnology')
                  }
                  color="#1e90f4"
                />
              </View>
              <View style={styles.g}>
                <Button
                  title="Go to Back"
                  onPress={() => this.props.navigation.goBack()}
                  color="#000"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class ArtTeacherDiplomaScreen extends React.Component {
  static navigationOptions = {
    title: 'Art Teacher Diploma',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Art Teacher Diploma.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course is basically designed to train the candidates in the fundamental and basic principles of visual and design experience.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>2 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the successful completion of the course, the Diploma holders in Art Teaching are eligible to become an Arts Teacher.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-art_craft-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class CommercialArtDiplomaScreen extends React.Component {
  static navigationOptions = {
    title: 'Commercial Art Diploma',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Commercial Art Diploma.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course will help the students to understand the concepts of selling goods and services. The course is completely different from fine art.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>2-3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the completion of the course, the students will be eligible to secure jobs in Advertising Companies, Art Studios, Publishing Houses and Fashion Houses.Students can also join Bachelor of Fine Arts (BFA) course through Lateral Entry mod.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-commercial_arts-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainStenographyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Stenography',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Stenography.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>In this course, the students will be equipped in taking short-hand dictations and perform clerical duties.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>1 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>These students will have more scope to get a job as Stenographer in the government sector and the private sector.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-stenography-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class Diplomain3DAnimationScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in 3D AnimationScreen',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in 3D Animation.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course will enable the candidate to obtain all the necessary skills related to 3D Animation.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>18 months to 2 years (varies from institute to institute)</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>These students can get employment as 3D Animator or Animator in Animation Companies. The scope of employment for high-skilled candidates is more.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-3d_animation-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainBeautyCareScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Beauty Care',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Beauty Care.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>It is one of the most preferred courses among girls. Through this course, the participants will be trained in beautician skills.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>4 months.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the successful completion of course, the students can start their own beauty parlour.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-cosmetology-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainCosmetologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Cosmetology',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Cosmetology.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course will help the participants to have an in-depth understanding of wide range of cosmetics.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>5 months.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the successful completion of course, the students can become a beautician or can start their own beauty parlour. They can also secure employment as Salesman in companies that manufacture cosmetics.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-cosmetology-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainCyberSecurityScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Cyber Security',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Cyber Security.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>One of the contemporary courses that will enable the students to acquire skills related to ethical hacking.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>1 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the successful completion of course, the students will have chances to secure job as an Ethical Hacker in government agencies or private organisations.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-cyber_security-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainAgricultureScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Agriculture',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Agriculture.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course enables the students to understand various techniques of farming, types of soils etc.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>2 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>Students can join B.Tech in Agriculture Engineering through lateral entry mode after the successful completion of Diploma.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-agriculture_science-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainHotelManagementandCateringTechnologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Hotel Management and Catering Technology',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Hotel Management and Catering Technology.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course will help the participants to meet the industry needs for competent hospitality trade.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>2 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>With this diploma, students are eligible to take up various jobs like Catering Officer, Catering Supervisors & Assistants, Cabin Crew, Hospitality Executive etc.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/filter/diploma-catering-hotel_management_catering_technology-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainCommercialPracticeScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Commercial Practice',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Commercial Practice.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course deals with the promotion, sale or supply of service or product to a consumer. The students will be trained in necessary skills associated to it.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>This diploma will help students to secure a job as Commercial Account Manager, Commercial Executive, Business Junior Head, Branch Commercial Assistant Manager etc.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-commercial_practice-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainDentalMechanicsScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Dental Mechanics',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Dental Mechanics.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>It is a Dentistry course that trains the students in designing dental structures and makes them more knowledgeable about dental health.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>2 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>After the course, students will be eligible to become a : Dentist,Assistant Dental Surgeon,Dental Technician,Research Assistant</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-dental_mechanic-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainPlasticsTechnologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Plastics Technology',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Plastics Technology.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course trains the students in selecting the right type of material to make a plastic product. Students will be also trained in handling machinery for making plastic products.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>Students can either go for further studies in Plastic Technology (B.Tech) or secure employment as : Plastic Part Mould Design Engineer,Project Engineer,Industrial Engineer,Product Design Enginee</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-plastic_engineering-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainCeramicTechnologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Ceramic Technology',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Ceramic Technology.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>It is one of the emerging disciplines that train the students in properties, manufacture, design and applications of ceramic materials.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>Students can either join B.Tech in Ceramic Technology in the lateral entry or secure employment as a Ceramic Engineer.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-ceramics_engineering-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainEngineeringScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Engineering',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Engineering.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>Colleges offer Diploma in Engineering (Polytechnic courses) in various branches of engineering.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>B.Tech Lateral Entry mode or jobs in the specified field</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/filter/diploma-aeronautical_engineering-aircraft_engineering-chemical_engineering-industrial_engineering-mechanical_engineering-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainFireSafetyEngineeringScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Fire Safety Engineering',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Fire Safety Engineering.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course trains the students in precautions that must be taken during a fire accident.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>6 months.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>Fire Safety Officer</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-fire_engineering-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DiplomainFashionTechnologyScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma in Fashion Technology',
  };
  render() {
    const htmlContent = `<p><b>Name of the Course :</b>Diploma in Fashion Technology.</p>`;
    const htmlContent0 = `<p><b>Course details :</b>The course offers practical knowledge of fashion technology and design.</p>`;
    const htmlContent1 = `<p><b>Duration of the Course :</b>3 years.</p>`;
    const htmlContent2 = `<p><b>Career Scope :</b>Fashion Designer,Costume Designer,Textile Designer,Bridal wear Designer,Stylistr.</p>`;
    const htmlContent3 = `<p><b>List of Colleges :</b><a href="https://www.collegedekho.com/diploma-fashion_technology-colleges-in-india/">College Lists</a></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Diploma Course</Text>
          <View style={styles.h}>
            <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent0} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
            <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          </View>
          <Button
            title="Go to back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class ItiScreen extends React.Component {
  static navigationOptions = {
    title: 'ITI',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Iti10 />
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Go to back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Navy10Screen extends React.Component {
  static navigationOptions = {
    title: 'Navy',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Navy10 />
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Go to back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Army10Screen extends React.Component {
  static navigationOptions = {
    title: 'Army',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Army10 />
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Go to back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Airforce10Screen extends React.Component {
  static navigationOptions = {
    title: 'Airforce',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Airforce10 />
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Go to back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class After12Screen extends React.Component {
  static navigationOptions = {
    title: 'After 12',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="11-12 Science"
                onPress={() => this.props.navigation.navigate('Science12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="11-12 Commerce"
                onPress={() => this.props.navigation.navigate('Commerce12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="11-12 Arts"
                onPress={() => this.props.navigation.navigate('Arts12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class Science12Screen extends React.Component {
  static navigationOptions = {
    title: 'After 12',
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Maths</Text>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Engineering Course"
                onPress={() => this.props.navigation.navigate('Engineering')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="B.Arch"
                onPress={() => this.props.navigation.navigate('Barch')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="B Pharmacy"
                onPress={() => this.props.navigation.navigate('Bpharmacy')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="BBA"
                onPress={() => this.props.navigation.navigate('Bba')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Commercial Pilot training"
                onPress={() => this.props.navigation.navigate('Cpt')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma Course in Fire Safety And Technology"
                onPress={() => this.props.navigation.navigate('Dfs')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Merchant Navy Related Course"
                onPress={() => this.props.navigation.navigate('Mnr')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Join Army Forces"
                onPress={() => this.props.navigation.navigate('Jaf')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Diploma Course"
                onPress={() => this.props.navigation.navigate('Diplomam12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="B Des. Course"
                onPress={() => this.props.navigation.navigate('Bdes')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Bachelor Of Planning"
                onPress={() => this.props.navigation.navigate('Bopm')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Bachelor Of Interior Design"
                onPress={() => this.props.navigation.navigate('Bid')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Teaching & Education Courses"
                onPress={() => this.props.navigation.navigate('Tecm')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Pharm D"
                onPress={() => this.props.navigation.navigate('Pdm')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Management Course"
                onPress={() => this.props.navigation.navigate('Mcm')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Degree Courses From Other Streams"
                onPress={() => this.props.navigation.navigate('Dcosm')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
          <Text style={styles.f}>Biology</Text>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="MBBS"
                onPress={() => this.props.navigation.navigate('Mbbs')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="BDS"
                onPress={() => this.props.navigation.navigate('Bds')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="B Pharmacy"
                onPress={() => this.props.navigation.navigate('Bp')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Bsc Nursing"
                onPress={() => this.props.navigation.navigate('Bn')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="BHMS"
                onPress={() => this.props.navigation.navigate('Bhms')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Bachelor of Physiotherpy"
                onPress={() => this.props.navigation.navigate('Bopb')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Others Bsc Course"
                onPress={() => this.props.navigation.navigate('Obc')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Dipmola Course"
                onPress={() => this.props.navigation.navigate('Diplomab12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="BUMS"
                onPress={() => this.props.navigation.navigate('Bums')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Baslp"
                onPress={() => this.props.navigation.navigate('Baslp')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Management Course"
                onPress={() => this.props.navigation.navigate('Mcb')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Teaching & Education Courses"
                onPress={() => this.props.navigation.navigate('Tecb')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
          <Text style={styles.f}>Maths-Biology</Text>
          <View style={styles.c}>
            <View style={styles.g}>
              <Button
                title="Common Course(For PCM & PCB)"
                onPress={() => this.props.navigation.navigate('MathsBiology12')}
                color="#1e90f4"
              />
            </View>
            <View style={styles.g}>
              <Button
                title="Go to Back"
                onPress={() => this.props.navigation.goBack()}
                color="#000"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class EngineeringScreen extends React.Component {
  static navigationOptions = {
    title: 'Engineering',
  };
  render() {
    const htmlContent = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After finishing 12th science stream schooling, one may go for undergraduate B.E. or B.Tech. Engineering program. The course duration is 4 years. After B.E./B.Tech., one may also go for M.E./M.Tech., which is master degree course in Engineering! M.E./ M.Tech. program lasts for 2 years. Some of the prominent branches of Engineering are Following.
    
    Those were some of the well known Engineering branches. One may pursue any of the above mentioned courses after 12th Science. Biotechnology Engineering is one such course that both Mathematics and Biology group students may pursue!
    
    After Engineering, one may easily find relevant jobs both in private as well as public sectors! If B.E./ B.Tech. Degree is followed up with M.E./M.Tech. Degree, one may also venture into the teaching field and become a College Lecturer!</p>`;
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mechanical Engineering primarily deals with the design, working, maintenance and operation of machines and their parts. It is a vast field and consists of disciplines such as – Automobile Engineering, Production Engineering, Industrial Engineering etc.
    
    Mechanical Engineering is an evergreen branch! This is due to the fact that there’s always demand for mechanical engineers in the job market! The minimum educational qualification required to pursue B.E. or B.Tech. in Mechanical Engineering is – 10+2 passed with PCM subjects.
   
    In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests). Here are some relevant entrance exams – JEE Main, JEE Advanced & BITSAT.</p>`;
    const htmlContent2 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electrical Engineering is one of the core branches of engineering. This branch primarily deals with generation and transmission of electricity, electric circuits, transformers etc. Electrical engineers may pursue Master’s Degree in fields such as CS, EC, Large Scale Integrated Circuits etc.
    
    Electrical Engineering is also an evergreen branch. There are ample job opportunities available in front of electrical engineers. The minimum educational qualification required to pursue B.E. or B.Tech. in Electrical Engineering is – 10+2 passed with PCM subjects.
    
    In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent3 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Civil Engineering, as we all know, primarily deals with planning, construction and maintenance of buildings and other physical structures (bridges, roads, canals, dams etc). It is a very important branch of engineering. It is a vast field and consists of sub-disciplines such as – transportation engineering, irrigation engineering, infrastructure engineering etc.
    
    After completing B.E. or B.Tech. in Civil Engineering, graduates may pursue M.E. or M.Tech. and specialize in the above mentioned disciplines.
    
    Civil Engineering is one of the oldest branches of engineering. It generates ample amount of job opportunities. The minimum educational qualification required to pursue B.E. or B.Tech. in Civil Engineering is – 10+2 passed with PCM subjects.
    
    In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent4 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chemical Engineering primarily deals with chemical reaction, chemical processes and production of various types of chemicals. Chemical engineers are usually hired by refineries, fertilizer manufacturing firms, chemical factories and oil and natural gas firms.
    
    Chemical Engineers have access to both private and government sector jobs. The minimum educational qualification required to pursue B.E. or B.Tech. in Chemical Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent5 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Science Engineering primarily deals with computer hardware, software and programming. Coding has gained huge popularity in the recent times. We rely on software for tasks such as – banking, finance, education, healthcare, business etc.
    
    For creating software, we need computer engineers! Skilled computer engineers are capable of planning, designing, developing and testing software.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Computer Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent6 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT stands for Information Technology. We rely on IT systems for tasks such as – banking, education, business, healthcare etc. In order to design, develop, install and operate IT systems, we need skilled IT Engineers.
    
    It is a relatively new field of engineering. But within short span, it has gained huge popularity and a place of its own among other engineering branches!
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in IT Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent7 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IC stands for Instrumentation and Control. This branch primarily deals with – hydraulics, pneumatic systems, instrumentation, control systems etc. It is a job oriented branch and is known to generate ample job opportunities.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in IC Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent8 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EC stands for Electronics and Communication Engineering. This branch primarily deals with electronic systems, equipment, communication systems, electromagnetic waves etc.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in EC Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent9 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electronics Engineering primarily deals with electronic systems, circuits, electronic equipment etc. Programming and automation are also important parts of this branch.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Electronics Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent10 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electronics and Telecommunication Engineering deals with electronics as well as telecommunication systems. Though this branch is similar to EC and Electronics Engineering, it focuses extensively on communication systems.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Electronics and Telecommunication Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent11 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Petroleum Engineering primarily deals with exploration & surveying of potential reservoirs, extraction, processing, storage and transportation of petroleum and other by-products.
    
    Petroleum Engineering can broadly be classified into three sections – upstream, midstream and downstream. Petroleum Engineers are usually hired by refineries, oil and natural gas firms, chemical factories and oil and gas exploration firms.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Petroleum Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent12 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aeronautical Engineering primarily deals with the design, making, maintenance and operation of aircraft and its parts. Engine, wings, electronic systems – this branch covers everything related to an aircraft!
   
    There are specializations within this branch. For example – avionics. This specialization focuses on electronics systems used in the field of aviation! Similarly, there’s also a specialization that focuses on mechanical parts and machine used in the field of aviation.
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Aeronautical Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent13 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Automobile Engineering can be said to be a part of Mechanical Engineering. This branch made a place of its own after automobile technology has made advance in leaps and bounds! This branch primarily deals with the design, manufacturing, maintenance and research of automobiles!
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Automobile Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent14 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mining Engineering primarily deals with exploration and surveying of mines. Mining is carried out in order to obtain minerals, coal, metals, oil, natural gas etc. Mining is a complex process. It involves advanced surveying technology, complex drilling equipment, mathematics, physics and geology!
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Mining Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent15 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biotechnology is a relatively new branch of engineering. It combines biology, engineering and technology for the betterment of our lives. There are many applications to this branch. Notable areas are – healthcare, agriculture, food production and nutrition.
    
    Eligibility criteria of this program may vary from one institute to another. Science stream education is mandatory though! In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent16 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genetic Engineering combines elements of genetics, biology, engineering and technology. The main aim of this branch is to modify and engineer the genetic structure so that desired results and properties can be achieved at cellular and molecular level!
    
    The applications of this branch are many. Notable areas of application are – healthcare, nutrition, food processing and agriculture.
    
    Eligibility criteria of this program may vary from one institute to another. Science stream education is mandatory though! In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent17 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic Engineering deals with the processing, production and study of plastic products and materials. Plastic is used for making household utensils, toys etc. It is also used in pharmaceutical sector.Plastic engineers are knowledgeable about chemistry, material science, polymer processing and product design. The minimum educational qualification required to pursue B.E. or B.Tech. in Plastic Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent18 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Food Processing and Technology combines concepts of agriculture, chemistry, food processing and technology. As a result, this branch is capable of increasing food productivity and improving nutrition standards!
    
    Food Technology graduates are usually hired by food processing firms and Government agencies (example – state-wise food and beverages corporation). The minimum educational qualification required to pursue B.E. or B.Tech. in Food Processing and Technology is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent19 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agricultural Engineering combines the concepts of agricultural science, technology and engineering together! As a result, this branch is capable of improving agricultural productivity by increasing production and eliminating crop diseases!
    
    Agricultural engineers have diverse job opportunities available in front of them. Eligibility criteria of this program may vary from one institute to another. Science stream education is mandatory though! In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent20 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile Engineering primarily deals with textile machinery, processes, material and production. Textile sector is known to use heavy machinery for processing and production. It also involves chemical processes!
    
    The minimum educational qualification required to pursue B.E. or B.Tech. in Textile Engineering is – 10+2 passed with PCM subjects. In order to secure admission into reputed institutes, a candidate must crack relevant entrance tests (such as JEE, State-wise and Institute-wise entrance tests).</p>`;
    const htmlContent30 = `<p><b><ul>

<li>Aerospace Engineering</li>
<li>Dairy Technology and Engineering</li>
<li>Agricultural Information Technology</li>
<li>Power Engineering</li>
<li>Production Engineering</li>
<li>Infrastructure Engineering</li>
<li>Motorsport Engineering</li>
<li>Metallurgy Engineering</li>
<li>Environmental Engineering</li>
<li>Marine Engineering</li>
<li>Naval Architecture</li>
</ul></b></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
          <Text style={styles.f}>Mechanical Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <Text style={styles.f}>Electrical Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Text style={styles.f}>Civil Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Text style={styles.f}>Chemical Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
          <Text style={styles.f}>Computer Science Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
          <Text style={styles.f}>IT Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <Text style={styles.f}>IC Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <Text style={styles.f}>EC Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent8} stylesheet={styles} />
          <Text style={styles.f}>Electronics Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent9} stylesheet={styles} />
          <Text style={styles.f}>
            Electronics and Telecommunication Engineering
          </Text>
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <Text style={styles.f}>Petroleum Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <Text style={styles.f}>Aeronautical Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent12} stylesheet={styles} />
          <Text style={styles.f}>Automobile Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent13} stylesheet={styles} />
          <Text style={styles.f}>Mining Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent14} stylesheet={styles} />
          <Text style={styles.f}>Biotechnology Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent15} stylesheet={styles} />
          <Text style={styles.f}>Genetic Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent16} stylesheet={styles} />
          <Text style={styles.f}>Plastics Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent17} stylesheet={styles} />
          <Text style={styles.f}>Food Processing and Technology</Text>
          <HTMLView style={styles.p} value={htmlContent18} stylesheet={styles} />
          <Text style={styles.f}>Agricultural Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent19} stylesheet={styles} />
          <Text style={styles.f}>Textile Engineering</Text>
          <HTMLView style={styles.p} value={htmlContent20} stylesheet={styles} />
          <Text style={styles.f}>Other Engineering Course :</Text>
          <HTMLView style={styles.p} value={htmlContent30} stylesheet={styles} />
          <Button
            title="Go to Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BcaScreen extends React.Component {
  static navigationOptions = {
    title: 'BCA',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.C.A. stands for Bachelor of Computer Applications. Like B.Sc., B.C.A. too is a 3 years long course. This course focuses on Computers, software and applications, programming languages etc.
    
    After getting B.C.A. Degree, one may also go for PG course- M.C.A. It is a Master program and lasts 2 years. Talking about job opportunities, one may find jobs in both private as well as Government sectors. But private sector chips in with more job opportunities! Especially IT MNCs recruit B.C.A. Graduates in large numbers! One may also venture into the teaching profession after doing M.C.A.!</p>`;
    const htmlContent2 = `<p><b>Colleges :</b><ul>

<li>Government (State/Central)</li>
<li>SF (Self Financed)</li>
<li>Deemed University (SF)</li>
</ul></p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>Software developer</li>
<li>Computer Engineer</li>
<li>Project Manager</li>
<li>Software tester</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BarchScreen extends React.Component {
  static navigationOptions = {
    title: 'B Arch',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.Arch. stands for Bachelor of Architecture. Explaining in simple terms, it is a branch that deals with planning and construction of homes, buildings, commercial structures, public utility structures etc.
    
    Duration of B.Arch. course is 5 years. Talking about job opportunities, one may get into MNCs and top players operating in the Construction as well as building sector. Also, if you are creative and passionate, you may also start up on your own, planning, designing and creating homes and small projects. Gradually, you may climb the ladder and branch out onto bigger ventures!</p>`;
    const htmlContent2 = `<p><b>Colleges :</b><ul>

<li>Government (State/Central)</li>
<li>SF (Self Financed)</li>
<li>Deemed University (SF)</li>
</ul></p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>Chief Architect</li>
<li>Assistant Architect</li>
<li>Resource Manager</li>
<li>Planning & Design professional</li>
<li>Consultant</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BpharmacyScreen extends React.Component {
  static navigationOptions = {
    title: 'B Pharmacy',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many might be surprised on seeing B.Pharm. in this section! But yeah, even Mathematics group students may go for B.Pharm.!


    Pharmacy course is all about the pharmaceutical sector. It deals with topics such as making medicines, chemicals involved in making medicines, uses of medicines etc. This course is 4 years long.
    After completing B.Pharm., one may follow it up with the Master’s Degree- M.Pharm.! Talking about job opportunities, Pharmaceutical companies are the prime job providers. One may also get job in hospitals that hires chemists. Government sector jobs are also available for graduates, such as- in Government hospitals, as an Officer in the Drugs department.

    Opening one’s own shop is another option! A combination of B.Pharm. and M.Pharm. can also ensure you a job in Research sector as well as teaching sector!</p>`;
    const htmlContent2 = `<p><b>Colleges :</b><ul>

<li>Government (State/Central)</li>
<li>SF (Self Financed)</li>
<li>Deemed University (SF)</li>
</ul></p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>Pharmacist</li>
<li>Medical representativet</li>
<li>Research professional</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BbaScreen extends React.Component {
  static navigationOptions = {
    title: 'BBA',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.B.A. stands for Bachelor of Business Administration. This course has nothing to do with science stream. Still, science stream students are eligible to pursue it!
   
    B.B.A. program’s duration is 3 years. On completion, one may also go for M.B.A. (Master of Business Administration), which lasts for 2 years. Check out MBA course details here.</p>`;
    const htmlContent2 = `<p><b>Colleges :</b><ul>

<li>Government (State/Central)</li>
<li>SF (Self Financed)</li>
<li>Deemed University (SF)</li>
</ul></p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>HR Management</li>
<li>Material Management</li>
<li>Administrative roles</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class CptScreen extends React.Component {
  static navigationOptions = {
    title: 'Commercial Pilot Training',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After 12th standard, Mathematics group students may also go for Commercial Pilot training and become a Commercial Pilot! For this, they have to attend a Flight Training school. Please go through this detailed guide that I’ve written regarding Commercial Pilot Training.
    
    The course duration varies from one institute to another! In general, it lasts between 2-3 years. After finishing training, one may land the job of a Ferry pilot or Commercial pilot in Private or Nationalized Airline companies! After retirement, one may also become a trainer. This, according to me is an added advantage that this field offers!</p>`;
    const htmlContent2 = `<p><b>Colleges :</b>In India, there exists both Private and Government Flying Schools. Flying Schools are known to offer Commercial Pilot training to deserving candidates.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DfsScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma Course in Fire Safety and Technology',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a job oriented Fire and Safety course that 12th science Mathematics group students may pursue. There are many private institutes offering Diploma as well as certificate programs, when it comes to this course. Duration of the course may vary from one institute to another. But usually, it is between 1-3 years.</p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>Safety Engineer</li>
<li>Fire Safety Officer</li>
<li>Safety Management professional</li>
<li>Instructor</li>
<li>Safety Technology Consultant</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class MnrScreen extends React.Component {
  static navigationOptions = {
    title: 'Merchant Navy related Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looking from career prospects’ point of view, Merchant Navy is a well rewarding sector! The remuneration is generally high. But the work involved requires hard work and determination.
    
    Talking about Merchant Navy sector, there are various job posts available, like- Marine Engineer, Sailor etc. Based on the job post, there are number of courses available too. Some of the courses are- marine technology and engineering and diploma course to become sailor.</p>`;
    const htmlContent2 = `<p><b>merchant navy courses after 12th :</b><ul>

<li>B.E. or B.Tech. in Marine Engineering</li>
<li>B.E. or B.Tech. in Naval Architecture</li>
<li>B.Sc. Nautical Science</li>
<li>Diploma in Nautical Science</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class JafScreen extends React.Component {
  static navigationOptions = {
    title: 'Join Armed Forces',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes, this is a good option, but there is an age limit. You have to be 19 years old or younger to appear for NDA (National Defence Academy) exam. You must also have completed your 12th standard exams with A group. If you manage to pass NDA exam and SSB interview, you will get admission in NDA, Pune. You have to do a Bsc course there along with military training and studies. After 3 years in NDA and a year at IMA (Indian Military Academy), you will get a job in Indian Armed forces as an officer.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class Diplomam12Screen extends React.Component {
  static navigationOptions = {
    title: 'Diploma Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you don’t get admission in engineering, you can take admission in Diploma engineering (Mechanical/Chemical/Electrical/Civil and most other prominent Engineering disciplines). After completing your diploma, you can go for a degree. After you get your diploma, you have to attend an engineering college for only 2 years to get a degree.
    
    Apart from the traditional Diploma Engineering programs, there exists many other job oriented Diploma courses too. Some of them are short term and some others last more than a year, when it comes to duration. </p>`;
    const htmlContent2 = `<p><b>Diploma courses that one may pursue after 12th Science stream :<ul>

<li>Diploma in Print Media Journalism</li>
<li>Diploma in Animation and Multimedia</li>
<li>Diploma in Interior Designing</li>
<li>Diploma in Biotechnology</li>
<li>Diploma in Film making, Video production and Editing</li>
<li>Diploma in Jewellery Designing</li>
<li>Diploma in Education Technology</li>
<li>Diploma in Retail Management</li>
<li>Diploma in English Teaching</li>
<li>Diploma in Fashion Designing</li>
<li>Diploma in Banking and Finance</li>
<li>Diploma in Yoga Education</li>
<li>Diploma in Event Management</li>
</ul></b></p>`;
    const htmlContenta = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other than the above mentioned Diploma courses, there also exists the traditional technical Diploma engineering courses also. Maths group students, who have less marks may pursue Diploma instead of Degree engineering course. After completing diploma education, they may take admission in Bachelor’s Degree program using the lateral entry scheme! Some traditional technical diploma courses are :</p>`;
    const htmlContent3 = `<p><ul>

<li>Diploma in Mechanical Engineering</li>
<li>Diploma in Electrical Engineering</li>
<li>Diploma in Civil Engineering</li>
<li>Diploma in Chemical Engineering</li>
<li>Diploma in Mining Engineering</li>
<li>Diploma in Computer Science Engineering</li>
<li>Diploma in Marine Engineering</li>
<li>Diploma in EC Engineering</li>
<li>Diploma in IC Engineering</li>
<li>Diploma in Metallurgy</li>
<li>Diploma in Sound Engineering</li>
</ul></p>`;
    const htmlContent4 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are various other good courses like Hotel Management, Fire Safety Technology, Welding Technology and Software/Hardware courses. These courses also offer good job opportunities. Make sure that you get admission in an institute that is approved by the Government. Diploma course to become Air Hostess is another hot course for 12th passed students. Students who wish to have an exciting and adventurous career can opt for this course. The job involves lots of traveling and the pay scale is promising. After retiring from the profession, one can take up secondary jobs in fields related to hospitality. Even males can take up this course since male flight attendants are also in huge demand these days, due to new private airlines opening up. Science stream students are also eligible to pursue courses from other streams also. For example, they are eligible to pursue B.Com., Chartered Accountancy and even relevant B.A. programs also! A list of such courses are as follows :</p>`;
    const htmlContent5 = `<p><ul>

<li>B.Com. (relevant fields like statistics)</li>
<li>Bachelor of  Social Work</li>
<li>Mass Communication and Journalism (B.A. program)</li>
<li>Animation and Multimedia (B.A. program)</li>
<li>Performing Arts</li>
<li>Language Courses (Foreign Languages are promising)</li>
<li>Banking and Finance (B.A. program)</li>
<li>B.M.S. (Management course)</li>
<li>B.B.A.+M.B.A. (Integrated course)</li>
<li>Diploma in Film Making and Video Editing</li>
<li>Air Hostess/Cabin Crew training course</li>
<li>Diploma in Event Management</li>
<li>Ethical Hacking Courses</li>
<li>Digital Marketing Courses</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Text style={styles.f}>Other Good Course</Text>
          <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BdesScreen extends React.Component {
  static navigationOptions = {
    title: 'B Des',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachelor Programs in Design Field- Science stream graduates who have a flair for designing and fashion can take up any of these design related branches and build a good career. A list of programs that I found interesting are :</p>`;
    const htmlContent2 = `<p><b>Bachelor of Design (Fashion Designing) :</b>A well known course being taught in NIFT (National Institute of Fashion Technology), this one is a 4 year long course. The program is much sought after by students interested in designing clothes and apparels. The job prospects are good, when it comes to this particular course. After graduating, one has a wide choice of potential careers to choose from. Some of them are- designers, freelance design consultants, costume designers, illustrators etc. Also, graduates can easily land jobs in MNCs related to clothing line and designer wears. </p>`;
    const htmlContent3 = `<p><b>Bachelor of Design (Leather Design) :</b>Like the previous entry, this one is also a 4 year long course. Job opportunities are abundant in this field also. Primarily, this field is associated with designing of leather products, mass manufacturing of it, management of the good, transportation etc.</p>`;
    const htmlContent4 = `<p><b>Bachelor of Design (Accessory Designing) :</b>The duration of this course is 4 years long. This field is all about designing high end and innovative designed and crafted accessories, ornaments etc. Not just ornaments, this field also deals with accessories like footwear, interior design goods etc.</p>`;
    const htmlContent5 = `<p><b>Bachelor of Design (Textile Design :</b>4 years long course. Deals with all aspects associated with the field of textile manufacturing, processing, designing and management. One of the most popular courses offered by NIFT. Graduates will be able to find jobs easily in industries associated with clothes and textile industry</p>`;
    const htmlContent6 = `<p><b>Bachelor of Design (Knitwear Designing) :</b>Knit wear is emerging as the next big thing in the design and textile world. This 4 year long course deals with the fundamentals of knitting and also incorporates knowledge about state of the art methods and equipment too!</p>`;
    const htmlContent7 = `<p><b>Bachelor of Design (Fashion Communication) :</b>This is a new course, but surely high on promise and potential. In a nutshell, it is all about merchandising (visual), exhibiting design, fashion journalism etc. Graduates can be expected to get hired by media houses, as a fashion consultant. Graduates can also become chief organizers of fashion events.</p>`;
    const htmlContent8 = `<p><b>Animation film Design :</b>A 4 year long course offered by the prestigious NID (National Institute of Design). Graduates of this course can become independent animators, work under big Indian and International media production houses, advertising houses etc. The job scope is promising, when it comes to this particular field.</p>`;
    const htmlContent9 = `<p><b>Ceramic and Glass Design :</b>This activity has been practiced by man since ancient times. This 4 year long course offered by NID also imparts ancient techniques as well as state of the art methods also!</p>`;
    const htmlContent10 = `<p><b>Furniture and Interior Design :</b>A 4 years long course. Deals with various aspects of designing, manufacturing, processing etc of wooden and other types of furniture and interior designing goodies.</p>`;
    const htmlContent11 = `<p><b>Product Design :</b>This field is all about designing useful products or innovating and improving the design of already created products. This 4 year course is all about innovative attitude and making things more useful to mankind by improving its design!</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
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
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BopmScreen extends React.Component {
  static navigationOptions = {
    title: 'Bachelor of Planing',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are many institutes (especially private ones) offering this course. They offer Diploma as well as certificate courses. But try to get admission into premier institutes like CEPT and choose this course.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>BID course fees may vary from one college to another. Private colleges charge relatively higher fees. On an average, the tuition fees could be anywhere between 60-200K INR per year. Tuition fees depends upon factors such as – type of college, its rating, scholarship status of the candidate etc.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BidScreen extends React.Component {
  static navigationOptions = {
    title: 'Bachelor of Interior Design',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are many institutes (especially private ones) offering this course. They offer Diploma as well as certificate courses. But try to get admission into premier institutes like CEPT and choose this course.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>BID course fees may vary from one college to another. Private colleges charge relatively higher fees. On an average, the tuition fees could be anywhere between 60-200K INR per year. Tuition fees depends upon factors such as – type of college, its rating, scholarship status of the candidate etc.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class TecmScreen extends React.Component {
  static navigationOptions = {
    title: 'Teaching & Education Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Such courses are commonly known and the teachers training course. Usually B.Ed. is the most important course, when it comes to this category of professional courses. And it can be pursued only after graduation. But there also exists some teaching related courses, which can be done right after 12th science! They are:</p>`;
    const htmlContent2 = `<p><b>Related Course :</b><ul>

<li>B.El.Ed. (Bachelor of Elementary Education, 4 years long course)</li>
<li>Diploma in Elementary Education</li>
<li>B.P.Ed. (Bachelor of Physical Education)</li>
<li>Primary Teachers Training course (can follow it up with B.Ed.)</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class PdmScreen extends React.Component {
  static navigationOptions = {
    title: 'Pharm D',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pharm D stands for Doctor of Pharmacy. It is a Doctoral Degree program. The course duration is 6 years (5 years long academic program and 1 year long internship program). Like B Pharmacy, Pharm D is another professional course, which both Mathematics and Biology group students may pursue./p>`;
    const htmlContent2 = `<p><b>Fees :</b>Pharm D course will cost you more than B.Pharm. course. If you pursue this course from private colleges, it will set you back by 75-200K INR per year. Private institutes charge relatively higher fees. Obtaining free seat or using a scholarship will significantly reduce tuition fees.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class McmScreen extends React.Component {
  static navigationOptions = {
    title: 'Management Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After 12th Science (Mathematics group), students are also eligible to pursue management education. BBA (already mentioned) is the most popular choice among students these days. Many undergraduate level management programs are available (both Degree and Diploma). Here are some well known degree courses :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.B.A. (Bachelor of Business Administration)</li>
<li>B.M.S. (Bachelor of Management Studies)</li>
<li>Integrated B.B.A. + M.B.A. program (5 years duration)</li>
<li>B.H.M. (Bachelor of Hotel Management)</li>
<li>Retail Management (Diploma)</li>
<li>B.B.E. (Bachelor of Business Economics)</li>
<li>B.B.S. (Bachelor of Business Studies)</li>
<li>B.I.B.F. (Bachelor of International Business and Finance)</li>
<li></ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DcosmScreen extends React.Component {
  static navigationOptions = {
    title: 'Degree Courses From Other Streams',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mathematics group students are also eligible to pursue courses from other streams after 12th! Some examples of such courses are- B.Com., B.A., Management courses etc. While selecting such a course, make sure that it is a relevant and useful one. Some such courses are :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.Com. (relevant specialization)</li>
<li>B.A. (relevant specialization)</li>
<li>Bachelor of Social Work</li>
<li>CA (Chartered Accountancy)</li>
<li>CS (Company Secretary Course)</li>
<li>CMA (Certified Management Accountant)</li>
<li>Actuarial Science</li>
<li>Bachelor of Statistics</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class MbbsScreen extends React.Component {
  static navigationOptions = {
    title: 'MBBS',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The most sought after course, in case of Biology group students. The duration of this course is five and a half years. Academic duration is four and a half years. This is followed by an internship that lasts a year. So, combining them together, the duration of MBBS program turns out to be 5.5 years!

    As we all know, becoming a Doctor is not too easy. First of all, getting an MBBS seat in a private or Government College is a very difficult task. Then, the course is also not too easy!

    Still, doing MBBS and following it up with PG course will help you build a rewarding career. Healthcare business is booming and the demand for well qualified Doctors is expected to shoot up in the future. One may get job in Government or private sectors. Also, opening one’s own Clinic is also a good option!</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Completing medical education from a private institute is a costly affair. Private medical colleges are known to charge as much as – 100-500K INR per year for MBBS course. Government medical colleges, on the other hand, are known to charge relatively lower tuition fees. Some State Government medical colleges charge as low as 5-10K INR per year. This is the main reason why students prefer Govt medical colleges over private institutes.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BdsScreen extends React.Component {
  static navigationOptions = {
    title: 'BDS',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BDS stands for Bachelor of Dental Surgery. The course duration is 5 years. Of those 5 years, classroom studies make up 4 years. 1 year is dedicated towards internship!

      Getting into MBBS program is too tough. But getting a BDS seat is relatively easy! But at the same time, career prospects are a bit dim, when compared with MBBS. Still, one may complete BDS, follow it up with PG course and build a good career.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>BDS course is not as costly as MBBS. Tuition fees may vary from one college to another. It depends upon factors such as – type of college, scholarship status of the candidate, rating of the college etc.

    Based on the above mentioned factors, private dental colleges may charge anywhere between 100-300K INR per year. Government dental colleges are known to charge relatively lower tuition fees.<p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BpScreen extends React.Component {
  static navigationOptions = {
    title: 'B Pharmacy',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pharmacy course is all about the pharmaceutical sector. It deals with topics such as making medicines, chemicals involved in making of medicines, uses of medicines etc. This course is 4 years long.

    After completing B.Pharm., one may follow it up with the Master’s Degree- M.Pharm.! Talking about job opportunities, Pharmaceutical companies are the prime job providers. One may also get job in hospitals that hire chemists. Government sector jobs are also available for graduates, such as- in Government hospitals, as an Officer in the Drugs department etc.

    Opening one’s own shop is another option! A combination of B.Pharm. and M.Pharm. can also ensure you a job in Research sector as well as teaching sector!</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Private pharmacy colleges are known to charge around 60-80K INR per semester. This is the average tuition fees. It usually varies from one college to another. It also depends upon the scholarship status of the student.

    Government pharmacy colleges are known to charge very low tuition fees. Apart from tuition fees, other expenses (such as canteen fees, safety deposit, library fees, exam fees etc) may also be applicable.<p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BamsScreen extends React.Component {
  static navigationOptions = {
    title: 'BAMS',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.A.M.S. stands for Bachelor of Ayurvedic Medicine and Surgery. If you want to become an Ayurveda Doctor, B.A.M.S. course is for you! The course duration is five and a half years. Four and a half years are dedicated towards classroom courses and rest 1 year towards internship.

    In comparison to M.B.B.S. and BDS programs, getting a seat in BAMS program is easier! And talking about career prospects, the future in this sector is all set to be bright! Take a look at the pace at which Health tourism has been developing in the recent times. Ayurveda resorts and treatment evidently have played an effective role in developing health tourism.

    More and more people are trying out Ayurvedic treatment, thanks to its rising popularity and lack of side effects! So, it is safe to say that job opportunities will certainly increase with time. One may land job in private as well as Government sector</p>`;
    const htmlContent2 = `<p><b>fees :</b>Do you know why students prefer Govt Ayurveda colleges? This is due to the fact that Govt institutes charge very low tuition fees. When it comes to Govt institutes, the Government (State or Central) takes care of funding. As a result, these colleges are able to provide subsidized education to its students.

    Private colleges, on the other hand, are known to charge relatively higher tuition fees. It could be anywhere between 100-150K INR per year.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class PdbScreen extends React.Component {
  static navigationOptions = {
    title: 'Pharm D',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pharm.D. is a unique course! Its name may sound similar to Pharmacy course. But it has got more to it than just the elements of Pharmacy program!

    Pharm.D. can be said to be a mixture of B.Pharm., M.Pharm. as well as MBBS! Yes, this course got elements from all the above mentioned courses!

    This obviously means that the course duration will be pretty long, thanks to the enormous amount of study material that it consists of. The course duration is 6 long years!

    But job opportunities and career prospects are excellent! One may work abroad after doing this course. Pharm.D. Graduates are valued more in Western Countries than they are valued in India.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Pharm D course will cost you more than B.Pharm. course. If you pursue this course from private colleges, it will set you back by 75-200K INR per year. Private institutes charge relatively higher fees. Obtaining free seat or using a scholarship will significantly reduce tuition fees.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BnScreen extends React.Component {
  static navigationOptions = {
    title: 'Bsc Nursing',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Healthcare sector, the demand for well trained and qualified nurses is huge! The demand is increasing with time, but the supply, the number of qualified nurses graduating each year, is not satisfying this demand! In short, qualified nurses are well valued and are rewarded well for their service!

    B.Sc. Nursing course is 3 years long. It can be followed up with an M.Sc. Degree. There is a notion that this course is meant exclusively for girls. But it is not true at all! Male candidates too may pursue it.

    Ample amounts of jobs are available in both Private as well as Government sectors. Private as well as Government Hospitals are keen to recruit well qualified nurses!</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Each year, hundreds of thousands of students apply for B.Sc. Nursing admission across India. Most of them prefer Govt seats over private seats. This is due to the fact that Government nursing colleges charge very low tuition fees.

    If you want to pursue this course from a private institute, it will set you back by 60-100K INR per year. Tuition fees may vary from one institute to another.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BhmsScreen extends React.Component {
  static navigationOptions = {
    title: 'BHMS',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.H.M.S. stands for Bachelor of Homeopathic Medicine and Surgery. This course deals with Homeopathic medicines and procedures in detail. The course duration is five and a half years.

      What makes this course valuable is the fact that there are still many people who rely on Homeopathic medication and treatment. So, finding job in Private hospitals won’t be a problem for B.H.M.S. Graduates.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Government homeopathy colleges are known to charge very low tuition fees. Private colleges charge relatively higher tuition fees. If you want to pursue this course without spending a fortune, try to secure admission into a Govt BHMS college. Private college education can set you back by 60-100K INR per year.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BopbScreen extends React.Component {
  static navigationOptions = {
    title: 'Bachelor of Physiotherapy',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Physiotherapy professionals are well valued in Healthcare sector. They are required to help patients recover and rehabilitate from muscular injuries and physical injuries through non surgical methods.

    The course duration is four and a half years. 4 years are dedicated towards classroom studies and practical lessons. 6 months are dedicated towards internship.

    Talking about career prospects, after graduation, one may take up job of a physiotherapist in private as well as Government hospitals. One may also start one’s own venture.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>There exists two main types of physiotherapy colleges in India – Government and private physiotherapy colleges. Govt institutes charge relatively lower tuition fees. On the other hand, private physiotherapy colleges charge relatively higher tuition fees. If you pursue this course from a private college, it will set you back by around 60-150K INR per year.<p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class ObcScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Bsc Course',
  };
  render() {
    const htmlContent1 = `<p><b>Some other 3 years long B.Sc. courses that PCB group students may pursue are :</b><ul>

<li>B.Sc. Biochemistry</li>
<li>B.Sc. Biology</li>
<li>B.Sc. Physics</li>
<li>B.Sc. Chemistry</li>
<li>B.Sc. Environmental Science</li>
<li>B.Sc. Biotechnology</li>
<li>B.Sc. Nursing</li>
<li>B.Sc. Occupational Therapy</li>
<li>B.Sc. Physiotherapy</li>
<li>B.Sc. Radiology</li>
<li>B.Sc. Bioinformatics</li>
<li>B.Sc. Anthropology</li>
<li>B.Sc. Microbiology</li>
<li>B.Sc. Zoology</li>
<li>B.Sc. Forensic Science</li>
<li>B.Sc. Agriculture</li>
<li>B.Sc. Pathology</li>
<li>B.Sc. Speech Therapy</li>
<li>B.F.Sc. (Fisheries Science)</li>
<li>B.Sc. Horticulture</li>
<li>B.Sc. Genetics</li>
<li>B.Sc. Health Science and Nutrition</li>
<li>B.Sc. Sports Science</li>
<li>B.Sc. Audiology</li>
<li>B.Sc. Botany</li>
<li>B.Sc. Operation Theatre Technology</li>
<li>B.Sc. Anaesthesia and Operation Theatre Technology</li>
<li>B.Sc. Medical Laboratory Technology</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class Diplomab12Screen extends React.Component {
  static navigationOptions = {
    title: 'Diploma Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Listed below are some job oriented Diploma courses, which Biology Group students may pursue after 12th. Their duration may vary from 6 months to 1 year. Traditional Diploma course may last even longer than the period mentioned above.</p>`;
    const htmlContent2 = `<p><ul>

<li>Diploma in Pharmacy</li>
<li>Diploma in Medical Electronics</li>
<li>Diploma in Forestry</li>
<li>Diploma in Toxicology</li>
<li>Diploma in Interior Designing</li>
<li>Diploma in Fashion Designing</li>
<li>Diploma in Journalism and Mass Communication</li>
<li>Diploma in Yoga Education</li>
<li>Diploma in Food Science and Nutrition</li>
<li>Diploma in Nursing</li>
<li>Diploma in Event Management</li>
<li>Diploma in General Nursing and Midwifery</li>
<li>Diploma in Operation Theatre Technology</li>
<li>Diploma in Medical Laboratory Technology</li>
<li>Diploma in Anaesthesia Technology</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BumsScreen extends React.Component {
  static navigationOptions = {
    title: 'BUMS',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BUMS stands for Bachelor of Unani Medicine and Surgery. It is a 4½ years long professional course. After completing the course, Graduate must also do an unpaid internship lasting a duration of 1 year. Thus, it takes 5½ years to complete this course!

    Students who are unable to get admission in courses like MBBS, BDS and BAMS may take up this course. On completing it, they will get the tag of Doctor!</p>`;
    const htmlContent2 = `<p><b>Fees :</b>Govt Unani colleges will charge you anywhere between 5-15K INR per year. While at college, students will also have to face other expenses such as – lodging fees, canteen fees, security deposit, exam fees, library fees etc.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class BaslpScreen extends React.Component {
  static navigationOptions = {
    title: 'BASLP',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BASLP stands for Bachelor of Audiology Speech Language Pathology. It is a course that focuses on Audiology, hearing disorders, auditory systems, speech language therapy, hearing implants etc. It is a 4 years long course. After completing the course, Graduates will have to do a 1 year long Internship program. Thus, in total, it takes 5 years to complete this course.

   After completing the course, Graduates will be able to find a job in the following sectors- marketing of hearing implants, rehabilitation clinics (for people suffering from hearing disorders), Clinics and Hospitals, Special Schools and Educational Institutes (for children suffering from hearing disorders) and Hearing aid manufacturing industries.</p>`;
    const htmlContent2 = `<p><b>Fees :</b>If you pursue this course from a Government college, you will be charged a relatively smaller amount. But if you choose to pursue this course from a private college, it will cost you anywhere between 50-100K INR per year. While at college, students will also have to take care of other forms of expenses (lodging, canteen, exam fees, library fees etc).</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class McbScreen extends React.Component {
  static navigationOptions = {
    title: 'Management Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After 12th Science (Biology group), students are also eligible to pursue management education. Many undergraduate level management programs are available (both Degree and Diploma). Here are some well known degree courses :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.B.A. (Bachelor of Business Administration)</li>
<li>B.M.S. (Bachelor of Management Studies)</li>
<li>Integrated B.B.A. + M.B.A. program (5 years duration)</li>
<li>B.H.M. (Bachelor of Hotel Management)</li>
<li>Retail Management (Diploma)</li>
<li>B.B.E. (Bachelor of Business Economics)</li>
<li>B.B.S. (Bachelor of Business Studies)</li>
<li>B.I.B.F. (Bachelor of International Business and Finance)</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class TecbScreen extends React.Component {
  static navigationOptions = {
    title: 'Teaching & Education Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Such courses are commonly known and the teachers training course. Usually B.Ed. is the most important course, when it comes to this category of professional courses. And it can be pursued only after graduation. But there also exists some teaching related courses, which can be done right after 12th science (biology group)! They are :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.El.Ed. (Bachelor of Elementary Education, 4 years long course)</li>
<li>Diploma in Elementary Education</li>
<li>B.P.Ed. (Bachelor of Physical Education)</li>
<li>Primary Teachers Training course (can follow it up with B.Ed.)</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class DcosbScreen extends React.Component {
  static navigationOptions = {
    title: 'Diploma Course',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biology group students are also eligible to pursue courses from other streams after 12th! Some examples of such courses are- B.Com., B.A., Management courses etc. While selecting such a course, make sure that it is a relevant and useful one. Some such courses are :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.Com. (relevant specialization)</li>
<li>B.A. (relevant specialization)</li>
<li>Bachelor of Social Work</li>
<li>Aviation courses (B.Sc./Air Hostess training etc)</li>
</ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class MathsBiology12Screen extends React.Component {
  static navigationOptions = {
    title: 'Common Course(For PCM & PCB)',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After Engineering, B.Sc. programs are what 12th Science students choose often. When it comes to B.Sc. program, the course duration is 3 years. After graduation, one may go for PG course- M.Sc. It lasts for 2 years. Some good B.Sc. courses are :</p>`;
    const htmlContent2 = `<p><ul>

<li>B.Sc. Agriculture</li>
<li>B.Sc. Horticulture</li>
<li>B.Sc. Forestry</li>
<li>B.Sc. IT</li>
<li>B.Sc. Computer Science</li>
<li>B.Sc. Chemistry</li>
<li>B.Sc. Mathematics</li>
<li>B.Sc. Physics</li>
<li>B.Sc. Hotel Management</li>
<li>B.Sc. Nautical Science</li>
<li>B.Sc. Sports Management</li>
<li>B.Sc. Electronics</li>
<li>B.Sc. Electronics and Communication</li>
<li>B.Sc. Biotechnology</li>
<li>B.Sc. Aviation</li>
<li>B.Sc. Animation and Multimedia</li>
</ul></p>`;
    const htmlContent3 = `<p>The beauty associated with B.Sc. program is that many top Universities are offering attractive scholarships for meritorious students! Also, when B.Sc. is followed up with M.Sc., one may build a good career in Research and Development field!</p>`;
    const htmlContent4 = `<p><b>Some other 3 years long B.Sc. courses that PCB group students may pursue are :</b><ul>

<li>B.Sc. Biochemistry</li>
<li>B.Sc. Biology</li>
<li>B.Sc. Physics</li>
<li>B.Sc. Chemistry</li>
<li>B.Sc. Environmental Science</li>
<li>B.Sc. Biotechnology</li>
<li>B.Sc. Nursing</li>
<li>B.Sc. Occupational Therapy</li>
<li>B.Sc. Physiotherapy</li>
<li>B.Sc. Radiology</li>
<li>B.Sc. Bioinformatics</li>
<li>B.Sc. Anthropology</li>
<li>B.Sc. Microbiology</li>
<li>B.Sc. Zoology</li>
<li>B.Sc. Forensic Science</li>
<li>B.Sc. Agriculture</li>
<li>B.Sc. Pathology</li>
<li>B.Sc. Speech Therapy</li>
<li>B.F.Sc. (Fisheries Science)</li>
<li>B.Sc. Horticulture</li>
<li>B.Sc. Genetics</li>
<li>B.Sc. Health Science and Nutrition</li>
<li>B.Sc. Sports Science</li>
<li>B.Sc. Audiology</li>
<li>B.Sc. Botany</li>
<li>B.Sc. Operation Theatre Technology</li>
<li>B.Sc. Anaesthesia and Operation Theatre Technology</li>
<li>B.Sc. Medical Laboratory Technology</li>
</ul></p>`;
    const htmlContent5 = `<p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here’s the list of some of the popular ‘common’ courses. These courses can be pursued by both mathematics and biology group students :</b></p>`;
    const htmlContent6 = `<p><b>Air Hostess Traning :</b>To become an Air Hostess, one has to undergo training. There are many private institutes providing Diploma, Degree as well as Certificate Air Hostess training courses. Duration may vary depending upon the program. Generally, it lasts between 1-2 years. If it is a well paying job that you want, Aviation courses like these will be of help.</p>`;
    const htmlContent7 = `<p><b>Event Management course  :</b>Event Management course is very job oriented. Certificate, Diploma as well as Degree courses are available, when it comes to Event Management. Course duration varies between 1-3 years, depending upon the program.</p>`;
    const htmlContent8 = `<p><b>Hospitality Diploma Course :</b>Hospitality sector is booming. And with it, the job opportunities associated with this field are also increasing! Degree, Diploma as well a Certificate programs related to Hospitality Management are available as of now. A 4 years long B.H.M. (Bachelor of Hotel Management) course would be the best one among all of those Hospitality courses.</p>`;
    const htmlContent9 = `<p><b>Integrated Law :</b>12th Science students are also eligible to study law from Law schools! One has to choose to pursue it as an integrated Law course lasting five years though! For example- B Sc+LLB, BBA+LLB etc. This is how integrated courses works ! Talking about job opportunities, one may start working for Law firms. After gaining experience, one may start private practice too!</p>`;
    const htmlContent10 = `<p><b>Animation , Graphics & MultiMedia :</b>If you have the right set of skills, the field of Animation and multimedia will help you build a successful career. This is a field that requires creativity, if you want to thrive!
    Diploma courses lasting 1-2 years are offered by many institutes throughout India. B.Sc. courses related to Animation and Multimedia, lasting 3 years, are also offered by many Institutes across India. 12th passed science stream students may also go for B.A. Animation and Multimedia course! Even though this course is from another stream, science students are eligible to study it!</p>`;
    const htmlContent11 = `<p><b>Fashion Technology/Design :</b>Institute like NIFT (National Institute of Fashion Technology) is offering 4 year Degree course in Fashion Technology. Also, there are number of private institutes offering Diploma as well as certificate courses too. In those cases, the typical course duration is between 1-2 years. Design related courses too could be pursued by students hailing from both groups- Mathematics and Biology.</p>`;
    const htmlContent12 = `<p><b>Journalism & Mass Communication :</b>Trains one to become a part of the media sector. Typical course offers programs related to news reporting, journalism, photography and video shooting, anchoring, news presenting etc.
    Diploma as well as Degree courses are offered by many private Mass Communication institutes. Course duration varies between 1-3 years. Major media houses- print and Digital- offers ample job opportunities. B.A. in Journalism and Mass Communication is another Degree course being offered by many colleges in India. Even though it is an Arts stream subject, science students may pursue it after 12th!</p>`;
    const htmlContent13 = `<p><b>Web development & Designing :</b>There are Diploma as well as certificate courses offered by private institutes. Course duration varies, depending upon the program. Usually, they last between 6 months- 2 years.
    Web development sector is booming. MNCs and small businesses offer good number of job opportunities. One may also start freelancing/start one’s own web designing firm.
    Apart from traditional Science stream courses (Mathematics and Biology Groups) and other job oriented Diploma, Certificate and Computer courses, Science stream passed students are also eligible to apply for and pursue Commerce as well as Arts stream courses! Yes, many students and parents are unaware of this fact! A Science stream student can pursue Commerce stream courses like B.Com., CA (Chartered Accountancy), Company Secretaryship course etc. Similarly, he/ she may also pursue Arts stream courses like B.A., Bachelor of Performing Arts etc. If you want to switch your stream and pursue courses from other streams, you are very much eligible to do so. But note that the syllabus and study material will be totally new to you in College, if you make a switch of stream.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.f}>Bsc For PCM</Text>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <Text style={styles.f}>Bsc For PCB</Text>
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
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class Commerce12Screen extends React.Component {
  static navigationOptions = {
    title: 'Commerce',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.Com. stands for Bachelor of Commerce. This is a course that most 12th Commerce stream students pursue after schooling! And there are many reasons why this course is so popular. First of all, the level of academic difficulty associated with this course is not too high. That means it is relatively easy to go thorough B.Com. program and obtain a Degree.

    Another advantage is that it allows students to venture on to other fields. It is one such course, after doing which, one may go for other job oriented courses such as M.B.A., Vocational courses, Skill oriented courses etc.

    Also, there are number of Private as well as Government Institutes offering B.Com. programs throughout India! So, finding a College and seat won’t be too difficult a task for 12th passed Commerce stream students! This, according to me, is another advantage that B.Com. course offers.
    
    When it comes to B.Com., course duration is 3 years. After its completion, students may go for M.Com., which is Masters program. M.Com. will take 2 years to complete. After B.Com.-M.Com., one may easily get a job in teaching sector.

    Other than that, there are numerous job opportunities for B.Com. graduates in Private and Government sectors. There are many Government job posts for which B.Com. graduates may apply. And there are many accountancy, finance and clerk posts available in Private companies, for which B.Com. graduates may apply.</p>`;
    const htmlContent2 = `<p><b>Important subjects present in B.Com. course :</b><ul>

<li>Economics</li>
<li>Marketing</li>
<li>Entrepreneurship</li>
<li>Mathematics</li>
<li>Computer Applications and IT</li>
<li>Business Regulatory Framework</li>
<li>Company Laws</li>
<li>Corporate Accounting</li>
<li>Income Tax</li>
<li>Business Communications</li>
<li>Business Environment</li>
<li>Management Accounting</li>
<li>Auditing</li>
<li>Statistics</li>
<li>Human Resource Management</li>
<li>Banking and Insurance</li>
</ul></p>`;
    const htmlContent3 = `<p><b>Job profiles :</b><ul>

<li>Software developer</li>
<li>Computer Engineer</li>
<li>Project Manager</li>
<li>Software tester</li>
</ul></p>`;
    const htmlContent4 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Those were some main subjects taught in B.Com. program. Please note that many subjects gets repeated in each semester. Also, many elective subjects are also present in case of each semester. In case of B.Com. (Honours) program, specializing opportunity is also present, where students may select a particular Discipline and specialize in it!</p>`;
    const htmlContent5 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usually, only Graduates are allowed to pursue L.L.B. But, thanks to new rules, it is also possible for 12th Commerce students to pursue Law course from Law schools after schooling.

    But to do so, they will have to select an integrated Law course! Such integrated courses lasts 5 years. These Integrated courses are combination of a Degree course and traditional L.L.B. course. For example- B.Com. and L.L.B./ B.A. and L.L.B. etc.

    Talking about job opportunities, one may take up job in any law firm at the beginning. Gradually, one may start up on one’s own private practice, start a consulting firm or even start an own law firm!</p>`;
    const htmlContent6 = `<p><b>Important subjects present in Law Courses  :</b><ul>

<li>Constitutional Laws</li>
<li>Property Laws</li>
<li>Banking Laws</li>
<li>Environmental Laws</li>
<li>Company Laws</li>
<li>Consumer Protection Laws</li>
<li>Family Laws</li>
<li>Labour and Industrial Laws</li>
<li>Human Rights laws</li>
<li>Administrative Laws</li>
<li>Public International Laws</li>
</ul></p>`;
    const htmlContent7 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Those were some important subjects taught during L.L.B. program (Integrated or Regular). Apart from the theoretical subjects, regular Moot Court sessions are also held throughout the program. Some subjects will keep on repeating throughout different semesters.</p>`;
    const htmlContent8 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C.A. stands for Chartered Accountant. Job of a C.A. is to see to it that the financial affairs of businesses and companies are in accordance with the laws set by Government authorities. Their tasks include looking into tax affairs, look into financial transactions through auditing, creating necessary reports etc.

    To become a C.A., one has to successfully complete Chartered Accountancy course and become a member of ICAI (Institute of Chartered Accountants of India).

    In case of 12th Commerce passed students, they may start off by applying for CPT (Common Proficiency Test). This test managed by ICAI.

    Once CPT is cleared, students have to appear for C.A. Inter course. After completing C.A. Inter exam and doing Information Technology Training Course, one may appear for C.A. Final exam!

    After clearing the final exam, one is said to have completed Chartered Accountancy test and become a C.A.! Studying involved in becoming C.A. is tough. But at the same time, the career prospects are exciting!

    After becoming a C.A., one may take up positions related to Finance department in Private companies as well as Government Enterprises. After gaining some experience, one may also start working independently, offering consultation services as well as operating as a private auditor who may be hired by companies and businesses!</p>`;
    const htmlContent9 = `<p><b>Important subjects present in Chartered Accountancy program :</b><ul>

<li>Accounting</li>
<li>Economics</li>
<li>Taxation</li>
<li>Tax Laws</li>
<li>Auditing</li>
<li>Business Laws</li>
<li>Financial Management</li>
<li>Business Communication</li>
<li>Corporate Laws</li>
</ul></p>`;
    const htmlContent10 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.B.A. stands for Bachelor of Business Administration. It is a 3 years long Degree course. After completion, one may also follow it up with an M.B.A. (Master of Business Administration) Degree too!

    After B.B.A., one may land managerial jobs in private sector. Though jobs are available for B.B.A. graduates in Government sector, the private sector offers more opportunities! Many MNCs recruit talented B.B.A. graduates to deal with management and finance related posts.</p>`;
    const htmlContent11 = `<p><b>Important subjects present in B.B.A. program :</b><ul>

<li>Financial Management</li>
<li>Marketing</li>
<li>Economics</li>
<li>Human Resource Management</li>
<li>Accounting</li>
<li>Statistics</li>
<li>Business Communications</li>
<li>Entrepreneurship skills</li>
</ul></p>`;
    const htmlContent12 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apart from the above mentioned subjects, B.B.A. students also have elective subjects to choose, based on the area in which they want to specialize! Some subjects will keep on repeating throughout the program’s different semesters.</p>`;
    const htmlContent13 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why I mentioned this course here is that Commerce stream students will find it relatively easier to deal with B.Economics. or B.A. Economics. After completing this course (which lasts 3 years), one may land jobs in private as well as Government sector.

    There are many Government posts, which B.A. Economics graduates are eligible to apply for! And in private sector, companies hire graduates to take up posts related to finance.</p>`;
    const htmlContent14 = `<p><b>Important subjects present in B.Economics. program :</b><ul>

<li>Agricultural Economics</li>
<li>Macro Economics</li>
<li>Principles of Economics</li>
<li>Indian Economics</li>
<li>Macro Economics</li>
<li>Industrial Economics</li>
<li>Banking Economics</li>
<li>Public Finance</li>
<li>International Trade</li>
<li>Regional Economics</li>
</ul></p>`;
    const htmlContent15 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please note that I’ve listed only the important subjects. And many of these subjects will keep on getting repeated throughout the program.</p>`;
    const htmlContent16 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For any company to function properly, a company secretary is needed! And to become a C.S., one has to appear for Company Secretaryship course and clear the exams associated with the course. ICSI (Institute of Company Secretaries of India) is the Institute that has been tasked by the Government to conduct the course as well as examination!

    In case of 12th Commerce passed students, to get selected for the C.S. course offered by ICSI, they must go through a 3 stage program. The three programs are :</p>`;
    const htmlContent17 = `<p><ul>
<li>Foundation Program</li>
<li>Executive Program</li>
<li>Professional Program</li>
<ul>

    Talking about job opportunities, without any doubt, private sector provides ample job opportunities.</p>`;
    const htmlContent18 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When it comes to Hospitality courses, the eligibility criteria is not very strict. Even 10th passed students may pursue Hospitality Diploma courses! But on the other side, such courses possess good value too! I must say that they are job oriented courses.

    I’ve already published an article where I’ve listed some good Hospitality Diploma courses. Please go through that article to get more details about the different hospitality courses.</p>`;
    const htmlContent19 = `<p><b>Important subjects present in Hospitality Diploma courses :</b><ul>

<li>Food Production</li>
<li>Front Office Operations</li>
<li>Human Resource Management</li>
<li>Housekeeping and Maintenance</li>
<li>Communication Skills</li>
<li>Travel Management</li>
<li>Accounting</li>
</ul></p>`;
    const htmlContent20 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commerce stream students may go for certificate/diploma/degree course, when it comes to animation and multimedia field. Job opportunities are available in ample amounts. Particularly after the success of many animation movies, animation artists are in demand!

    Based on the nature of the course program, its duration may vary from 6 months to 3 years.</p>`;
    const htmlContent21 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When it comes to this field, Diploma as well as Degree programs are available. Based on the program, the duration may be between 1-3 years.

    Talking about job opportunities, one may get job in major media houses, both print as well as digital media.</p>`;
    const htmlContent22 = `<p><b>Important subjects present in Journalism and Mass Communication courses :</b><ul>

<li>Media Ethics</li>
<li>Mass Communication</li>
<li>Editing</li>
<li>Reporting</li>
<li>Languages and Translation</li>
<li>Communication Skills</li>
<li>Electronic Media</li>
<li>Print Media</li>
</ul></p>`;
    const htmlContent23 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certificate, Diploma as well as Degree courses are available, when it comes to Event Management. Course duration varies between 1-3 years, depending upon the program.

    I’ve already written a detailed article about Event Management courses. Please go through that article to get more details such as career prospects, list of Institutes offering Event Management Course etc.</p>`;
    const htmlContent24 = `<p><b>Important subjects present in Event Management courses :</b><ul>
<li>Study of main events</li>
<li>Planning</li>
<li>Human Resource Management</li>
<li>Accounting</li>
<li>Marketing and Advertising</li>
<li>Public Relations</li>
<li>Business Laws</li>
</ul></p>`;
    const htmlContent25 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To thrive in this field, you need to have creativity as well as interest towards fashion and designing. This is a vast field. There are different small sections within this field such as- apparel designing, accessories designing etc.

    Different programs such as diploma, certificate as well as degree courses are available. Depending on the program, duration of the course may be 1-4 years. Talking about job opportunities, private sector jobs are available, which one may take up. Also, one may start up on one’s own too!</p>`;
    const htmlContent26 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A job oriented course this one is! It certainly has got elements of hospitality sector. But, degree course in Hotel Management is more valuable than the hospitality diploma courses that I mentioned above.

    Course duration is 4 years, in case of Degree course. And when it comes to job opportunities, there are jobs available in both Private as well as Government sectors!</p>`;
    const htmlContent27 = `<p><b>Important subjects present in B.H.M. (Bachelor of Hotel Management) course :</b><ul>

<li>Communication Skills</li>
<li>Foreign Language</li>
<li>Food Production</li>
<li>Travel Management</li>
<li>Front Office Operations</li>
<li>Housekeeping</li>
<li>Management</li>
<li>Accounting</li>
<li>Nutrition and Food Science</li>
<li>Public Relations</li>
<li>Marketing</li>
</ul></p>`;
    const htmlContent28 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.Stat. program is suitable for those who are interested in mathematics and love playing around with data and numbers! Indian Statistical Institute is the place where you may pursue Bachelor of Statistics program.

    ISI is a very reputed institute. 10+2 passed students are eligible to pursue this course from ISI. The selection process consists of written entrance test. After written test, selected candidates have to undergo an interview.

    B.Stat. course consists of topics like probability, statistical methods, permutations and combinations etc. Those who are genuinely interested in these topics and are good with numbers may pursue this course.

    After completing the course, one may go for PG courses or work as statistician.</p>`;
    const htmlContent29 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actuarial Science is a course that uses mathematics and statistics to determine risk in sectors like insurance, finance and other relevant fields.

    12th Commerce stream passed students are eligible to pursue this course. Institute of Actuaries of India (IAI) is the Governing body responsible for actuarial education in India.

    To pursue this course, one must first clear the entrance test held by the IAI. The entrance test is called the ACET. After clearing the entrance test, one will be considered eligible to pursue this course!

    The course consists of four stages- Core Technical Stage, Core Application Stage, Specialist Technical Stage and Specialist Application stage. In total, to complete this course, one must go through 15 papers! Course is like CA course- there is no fixed duration! In how much time you complete the course depends on your aptitude and study schedule.</p>`;
    const htmlContent30 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ICWAI used to offer the CWA course. The name of ICWAI’s course has been changed now. It is now known by the name of CMA. CMA stands for Certified Management Accountant.

    This course, Chartered Accountancy and CS course have few common elements present in them! CMA course has three levels- Foundation, Intermediate and Final. 12th standard passed students may take the first step- Foundation level and start CMA course.

    Coming to course duration, it depends on your aptitude. Generally, this course can be completed within 2-3 years. CMA professionals are recruited by various industries.

    Many of the above mentioned subjects will keep on repeating and will appear in more than one semester! Also, emphasis is laid on practical training sessions also, in addition to theory classes.</p>`;
    const htmlContent31 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BID stands for Bachelor of Interior Design. It is a Bachelor’s Degree course. This course revolves around the domain of interior design. Technically, it is a ‘design’ course. The course duration is 3 years long.

    If you are passionate about design, creativity and planning, this program will be of help to you. This course will help you build a decent career in interior design sector. Students who have passed 12th commerce stream are eligible to apply for BID admission.</p>`;
    const htmlContent32 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.Voc. stands for Bachelor of Vocation. Technically, it is a vocational training course. The main aim of this course is to develop relevant industry-specific/domain-specific skills among students. In other words, B.Voc. programs are aimed at skill development.

    The course is 3 years long. It offers multiple entry and exit options. Availability of exit options make this program quite flexible. This is why B.Voc. programs have become quite popular among Indian students!</p>`;
    const htmlContent33 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BCA stands for Bachelor of Computer Applications. It is a Bachelor’s Degree program. Technically, it is a computer education program. This program will train you in areas such as – computer hardware, software, OS, programming, IT systems, networking, web development etc. Commerce stream students are eligible to pursue this computer science course.</p>`;
    const htmlContent34 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMS stands for Bachelor of Management Studies. It is a management education program. BBA is the most popular UG level management education program in India. But BMS is a good choice too! This program deals with core management subjects. After completing this course, you may land managerial/administrative jobs in corporate sector. You may even go for an MBA after BMS to boost your career prospects!</p>`;
    const htmlContent35 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commerce stream students even have access to special education programs such as D.Ed. (Special Education) and Integrated B.Ed. (Special Education). Special education programs train students and turn them into skilled special education teachers.</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/11.png')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <Text style={styles.f}>B.COM.</Text>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
          <Text style={styles.f}>LAW</Text>
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <Text style={styles.f}>CA</Text>
          <HTMLView style={styles.p} value={htmlContent8} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent9} stylesheet={styles} />
          <Text style={styles.f}>BBA</Text>
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent12} stylesheet={styles} />
          <Text style={styles.f}>Bachelor Of Economics</Text>
          <HTMLView style={styles.p} value={htmlContent13} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent14} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent15} stylesheet={styles} />
          <Text style={styles.f}>CS</Text>
          <HTMLView style={styles.p} value={htmlContent16} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent17} stylesheet={styles} />
          <Text style={styles.f}>Hospitality Dipoloma Course</Text>
          <HTMLView style={styles.p} value={htmlContent18} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent19} stylesheet={styles} />
          <Text style={styles.f}>Animation & Multimedia Course</Text>
          <HTMLView style={styles.p} value={htmlContent20} stylesheet={styles} />
          <Text style={styles.f}>Journalism &Mass Communication</Text>
          <HTMLView style={styles.p} value={htmlContent21} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent22} stylesheet={styles} />
          <Text style={styles.f}>Event Management Course</Text>
          <HTMLView style={styles.p} value={htmlContent23} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent24} stylesheet={styles} />
          <Text style={styles.f}>Fashion Design & Technology</Text>
          <HTMLView style={styles.p} value={htmlContent25} stylesheet={styles} />
          <Text style={styles.f}>Hotel Management</Text>
          <HTMLView style={styles.p} value={htmlContent26} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent27} stylesheet={styles} />
          <Text style={styles.f}>Bachelor Of Statistics</Text>
          <HTMLView style={styles.p} value={htmlContent28} stylesheet={styles} />
          <Text style={styles.f}>Actuarial Science</Text>
          <HTMLView style={styles.p} value={htmlContent29} stylesheet={styles} />
          <Text style={styles.f}>CMA</Text>
          <HTMLView style={styles.p} value={htmlContent30} stylesheet={styles} />
          <Text style={styles.f}>BID</Text>
          <HTMLView style={styles.p} value={htmlContent31} stylesheet={styles} />
          <Text style={styles.f}>B.VOC</Text>
          <HTMLView style={styles.p} value={htmlContent32} stylesheet={styles} />
          <Text style={styles.f}>BCA</Text>
          <HTMLView style={styles.p} value={htmlContent33} stylesheet={styles} />
          <Text style={styles.f}>BMS</Text>
          <HTMLView style={styles.p} value={htmlContent34} stylesheet={styles} />
          <Text style={styles.f}>Special Education Course</Text>
          <HTMLView style={styles.p} value={htmlContent35} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class Arts12Screen extends React.Component {
  static navigationOptions = {
    title: 'After 12',
  };
  render() {
    const htmlContent = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Those were some top professional courses that one could do after finishing 12th Arts stream schooling. Not only are the above mentioned courses being offered by a large number of Colleges in India, they are job oriented too. If you are interested, please give the next section a look. Over there, I’ve analyzed some professional courses in detail, which Arts stream students are eligible to pursue!</p>`;
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.A. stands for Bachelor of Arts. It is one of the traditional professional courses that still many Arts stream students pursue. This course is 3 years long. B.A. students are supposed to go through a not too tough syllabus.

    The advantage of selecting this course is that it is an easy to do Undergraduate program! You see, many Government jobs require applicants to be Graduates. So, if it is a Government job that you are targeting, you may pursue this course. It is an easy to pursue course and one may concentrate one’s efforts towards preparing for Government Job entrance exams!

    Apart from the above mentioned advantage, there is another attractive advantage that this course offers- easy availability of seats and Colleges! Yes, throughout India, there are many Private as well as Government Colleges offering B.A. course. So, if one doesn’t want to leave one’s native place and pursue a professional course right there itself, this course could prove to be of help!

    Talking about eligibility criteria in case of B.A., 12th Arts (or any other stream) students who have successfully cleared 12th standard examination from a recognized School may pursue this course!
    
    After B.A., one may also go for M.A.! Doing so will enhance one’s skill set and market value! B.A. Graduates may land Government sector jobs such as in Banks, Armed Forces, Police Force, Administrative Office, Schools etc. They may also take up Private sector jobs such as- Accountants, Managers, Administrators etc.</p>`;
    const htmlContent2 = `<p><b>Important subjects present in B.A. program :</b><ul>

<li>English Language</li>
<li>Hindi of Cultures</li>
<li>Introduction to mechanics</li>
<li>Introduction to Graphics</li>
<li>Introduction to Design</li>
<li>Visual Arts studies</li>
<li>Study of Materials</li>
<li>Visual Perception</li>
<li>Wrokshops</li>
</ul></p>`;
    const htmlContent3 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.F.A. stands for Bachelor of Fine Arts. Just like B.A., this professional course is also 3 years long course.

    Talking about the syllabus, B.F.A. is all about study of visual forms of arts. For example, some of the areas of specialization within this course (and thus subjects) are- Painting, Sculpting, Music, Dance, Photography etc. According to me, this course suits students who are into the creative side of things!

    I think students who are not too creative and those who don’t have skills in the above mentioned fields must not think about pursuing this course. Because, to succeed and thrive in this field after Graduation, creativity and skills are must haves!

    When it comes to eligibility criteria, 12th Arts passed students may apply for B.F.A. There are many Private as well as Government Institutes offering B.F.A. course throughout India.</p>`;
    const htmlContent4 = `<p><b>Fees :</b>If you want to pursue this course from a private arts college, it will set you back by 10-40K INR per year. Tuition fees may vary from one college to another. It depends upon factors such as – type of college, its rating, scholarship status of the candidate, caste/category of the candidate etc.

    Government arts colleges are known to charge relatively lower tuition fees. Some State Govt institutes charge around 2-5K INR per year for this course</p>`;
    const htmlContent5 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This one is a job oriented and ‘in demand’ course. The Media sector is going through a phase of immense growth! Not only traditional forms of Media like print and TV, online media is also something that is catching up.

    All this has resulted in increased number of job openings in Media sector! So, it is safe to say that Mass Communication professionals are in demand these days!

    When it comes to Mass Communication, there are different types of courses available, like Degree, Diploma as well as Certificate courses. Degree course lasts 3 years. The duration of Diploma and Certificate courses ranges between 1-2 years.

    Students who have a flair for Journalism, social activism etc will thrive in this field. Also, having good communications skills will be an added benefit!

    12th Arts stream students who have successfully cleared board examinations may apply for this course. There are many Private as well as Government Institutes offering this course to students. Even there are institutes offering certificate as well as Diploma courses. Please make sure that those private institutes are recognized by the Government!

    Talking about job opportunities after this course, Media houses are the prime recruiters. These days, thanks to the arrival of unconventional online media brands, a whole new set of job opportunities has also been unfurled in front of Mass Communication students!</p>`;
    const htmlContent6 = `<p><b>Important subjects present in Journalism and Mass Communication courses :</b><ul>

<li>Media Ethics</li>
<li>Mass Communication</li>
<li>Editing</li>
<li>Reporting</li>
<li>Languages and Translation</li>
<li>Communication Skills</li>
<li>Electronic Media</li>
<li>Print Media</li>
</ul></p>`;
    const htmlContent7 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just like the previous entry, this one is also a job oriented course! It is a no nonsense course and trains students to take on managerial responsibilities in Hotel and hospitality Industry!

    Course duration in case of Degree course is 3 years. Diploma courses are also available, whose duration ranges between 1-2 years.

    With tourism sector of India going through a good phase, the Hotel business is also doing well. Government is also supporting tourism industry and thus it looks like Hotel business will continue this upward journey!

    Skilled Hotel Management professionals are valued by Big and medium sized hotels. Five star and other high rated Hotels are the prime recruiters.

    Arts stream students who have passed 12th standard examinations may pursue this course right after 12th!.</p>`;
    const htmlContent9 = `<p><b>Important subjects present in Hotel Management courses :</b><ul>

<li>Communication Skills</li>
<li>Foreign Language</li>
<li>Food Production</li>
<li>Travel Management</li>
<li>Front Office Operations</li>
<li>Housekeeping</li>
<li>Management</li>
<li>Accounting</li>
<li>Nutrition and Food Science</li>
<li>Public Relations</li>
<li>Marketing</li>
</ul></p>`;
    const htmlContent10 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B.B.A. stands for Bachelor of Business Administration. It is a 3 years long Degree course. After completion, one may also follow it up with an M.B.A. (Master of Business Administration) Degree too!

    After B.B.A., one may land managerial jobs in private sector. Though jobs are available for B.B.A. graduates in Government sector, the private sector offers more opportunities! Many MNCs recruit talented B.B.A. graduates to deal with management and finance related posts.</p>`;
    const htmlContent11 = `<p><b>Important subjects present in B.B.A. program :</b><ul>

<li>Financial Management</li>
<li>Marketing</li>
<li>Economics</li>
<li>Human Resource Management</li>
<li>Accounting</li>
<li>Statistics</li>
<li>Business Communications</li>
<li>Entrepreneurship skills</li>
</ul></p>`;
    const htmlContent23 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Event Management is one such field where one can make it really big, if one has the necessary skills and connections! Degree course in Event Management lasts 3 years.

    I’ve already written a detailed article about Event Management courses. In that article, I’ve covered details such as types of courses, career prospects, value of the course, nature of work involved etc.

    In short, Event Management is a job oriented course, which even 12th Arts stream students may pursue after completing 12th standard schooling successfully.</p>`;
    const htmlContent24 = `<p><b>Important subjects present in Event Management courses :</b><ul>
<li>Study of main events</li>
<li>Planning</li>
<li>Human Resource Management</li>
<li>Accounting</li>
<li>Marketing and Advertising</li>
<li>Public Relations</li>
<li>Business Laws</li>
</ul></p>`;
    const htmlContent25 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just like BFA, to thrive in the field of Fashion Designing, one must possess creativity! If you think you are creative and have a taste for fashion, this course is for you!

    Bachelor Degree program in Fashion Designing lasts 4 years. In this program, students are given theoretical knowledge as well as practical training!

    12th Arts stream students who have successfully cleared their 12th board examinations are eligible to apply for this course.</p>`;
    const htmlContent26 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Degree course is also related to the Fashion Industry. But, unlike Fashion Designing, this course focuses on merchandising, marketing and selling of products related to Fashion Designing sector!

    Duration of Bachelor Degree program is 4 years. 12th Arts stream, after clearing 12th standard examinations, are eligible to apply for this course!`;
    const htmlContent28 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Arts stream students, B.A. L.L.B. will be the best Integrated Law course that they could pursue! B.A. L.L.B. Integrated course’s duration is 5 years.

    I’ve already written an article about Integrated Law courses, the way they work, career prospects etc. Do read it to get more detailed knowledge about this course.</p>`;
    const htmlContent29 = `<p><b>Important subjects present in Law Course :</b><ul>

<li>Constitutional Laws</li>
<li>Property Laws</li>
<li>Banking Laws</li>
<li>Environmental Laws</li>
<li>Company Laws</li>
<li>Consumer Protection Laws</li>
<li>Family Laws</li>
<li>Labour and Industrial Laws</li>
<li>Human Rights laws</li>
<li>Administrative Laws</li>
<li>Public International Laws</li>
</ul></p>`;
    const htmlContent30 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graphic design is a vast field. There are areas of specialization within this field. And based on these specializations, there are number of professional courses available too!

    Some really good courses are- Animation, Graphic designing etc. Bachelor Degree course lasts 3-4 years. Diploma courses are also available, whose duration varies between 1-2 years.

    This field is more suited for creative folks, who are also interested in sketching and visual arts.</p>`;
    const htmlContent31 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arts stream students have access to a handful of teacher training courses. Qualified teachers helps educate children and nurture them into good human beings! Teachers have their own place and status in the society. Teaching is a highly respected profession in India.

    After 12th, Arts stream students may go for teacher training courses like- Integrated B.Ed. course, B.P.Ed. (Bachelor of Physical Education), B.El.Ed. (Bachelor of Elementary Education) or D.El.Ed. (Diploma in Elementary Education). Nursery level teacher training courses also exist in India.</p>`;
    const htmlContent32 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many parents and students claim that Arts stream is running out of/is already out of steam! How wrong they all are! In fact, many courses that one may pursue after 12th Arts are full of job opportunities. All one needs to have is a desire to achieve skills and go for higher studies or specializations if required.

    If one want to have a career in Management sector after 12th Arts, he/she may go for management oriented courses such as- B.M.S., B.B.A., B.B.S. etc. Wow, just take a look at the number of management courses available at the disposal of Arts stream students! After acquiring management related skills, students may also go for specialization by selecting a hot and happening M.B.A. branch. This is how one may scale up the career ladder without any hassles! It is all about acquiring skills and specializing in good disciplines!

    Let us talk about Bachelor of Arts course now. B.A. course could act like a spring board. It can be seen as a General Graduation program. After completing any B.A. program, students may take up jobs in the Government sector, for which, the minimum educational qualification is a Graduation Degree. There are various Government departments and sectors such as- Armed Forces, Railways, Administrative Offices, Civil Service posts, Municipal Bodies etc, where Graduates may find job!

    If you are into the creative side of things, Fine Arts or Performance Arts courses could be of help.

    If it is the Hospitality sector that you want to build a career in, Aviation courses, B.H.M. course, B.T.T.M. course etc could be of help. These sectors are going through phases of growth. Job opportunities created by them is also noticeable.

    Looking for some exciting and rewarding alternate courses and career? Try courses related to Event Management, Fashion Designing, Interior Designing, Animation & Multimedia. How well you succeed in the above mentioned fields depends on your skills and passion.

    Arts stream students may also pursue courses from other streams, such as- CA course (Chartered Accountancy), CMA (Certified Management Accountant), Bachelor of Statistics, Nursing (ANM or GNM) etc and build rewarding careers in those areas!

    Elementary Education, Physical Education and Diploma in Elementary Education course will enable you to take up a teaching job.

    Integrated Law course will help you build a career in Law sector</p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/12.png')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContent} stylesheet={styles} />
          <Text style={styles.f}>BA</Text>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent2} stylesheet={styles} />
          <Text style={styles.f}>BFA</Text>
          <HTMLView style={styles.p} value={htmlContent3} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent4} stylesheet={styles} />
          <Text style={styles.f}>Journalism & Mass Communication</Text>
          <HTMLView style={styles.p} value={htmlContent5} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
          <Text style={styles.f}>Hotel Management</Text>
          <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent9} stylesheet={styles} />
          <Text style={styles.f}>BBA</Text>
          <HTMLView style={styles.p} value={htmlContent10} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent11} stylesheet={styles} />
          <Text style={styles.f}>Event Management Course</Text>
          <HTMLView style={styles.p} value={htmlContent23} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent24} stylesheet={styles} />
          <Text style={styles.f}>Fashion Design</Text>
          <HTMLView style={styles.p} value={htmlContent25} stylesheet={styles} />
          <Text style={styles.f}>Retail & Fashion Merchandise</Text>
          <HTMLView style={styles.p} value={htmlContent26} stylesheet={styles} />
          <Text style={styles.f}>Intergrated Law Course</Text>
          <HTMLView style={styles.p} value={htmlContent28} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContent29} stylesheet={styles} />
          <Text style={styles.f}>Graphic Design</Text>
          <HTMLView style={styles.p} value={htmlContent30} stylesheet={styles} />
          <Text style={styles.f}>Teacher Training Course</Text>
          <HTMLView style={styles.p} value={htmlContent31} stylesheet={styles} />
          <Text style={styles.f}>Job & Career Prospects</Text>
          <HTMLView style={styles.p} value={htmlContent32} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class OthercourseScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Course',
  };
  render() {
    const htmlContenta = `<p><b>List of Other Curse in India :</b><ul>

    <li>Finance</li>
    <li>Human Resource Management</li>
    <li>Sales & Marketing</li>
    <li>Operations Management</li>
    <li>Banking & Finance</li>
    <li>International Business</li>
    <li>Marketing Management</li>
    <li>General Management</li>
    <li>Financial Market</li>
    <li>Administrative Management</li>
    <li>Endocrinology</li>
    <li>Aviation Management</li>
    <li>Banking Management</li>
    <li>Tourism</li>
    <li>Commercial Law</li>
    <li>Logistics & Supply Chain Management</li>
    <li>Cyber Law</li>
    <li>Media Management</li>
    <li>Corporate Management</li>
    <li>Agriculture Business Management</li>
    <li>Banking & Insurance</li>
    <li>Labour Law</li>
    <li>Capital Market</li>
    <li>Disaster Management</li>
    <li>Energy Management</li>
    <li>Business Analysis</li>

    <a href="https://www.careers360.com/all-courses%3Ff%5B0%5D%3Dsm_parent_course_degree_name%253AOthers">Other Course List is Here.</a>

    </ul></p>`;

    const htmlContentb = `<p><b>Links :</b><ul>
    
    <li><b><a href="https://en.wikipedia.org/wiki/Salary_of_Government_Officials_in_India">List , Salaries of Government Ministers, Government Officers, Constitutional Functionaries, Armed Forces Officers, Judges, Members of Parliament in India </a></b>

    <li><b><a href="https://www.quora.com/What-are-government-jobs-that-pay-high-salaries">What are government jobs that pay high salaries </a></b></li>

    <li><b><a href="https://money.usnews.com/careers/best-jobs/rankings/best-paying-jobs">Best Course (For Highest Paying Jobs) </a></b></li>

    <li><b><a href="https://www.apnaahangout.com/11-best-careers-and-jobs-with-high-salary-in-india/">List of Course in India(For Highest Paying Jobs) </a></b></li>

    <li><b><a href="https://www.monster.com/career-advice/article/part-time-jobs-for-older-workers">Best Course For Older People </a></b></li>

    <li><b><a href="http://www.businessworld.in/article/5-Jobs-That-Will-Earn-You-Money-While-Sitting-At-Home/12-07-2017-121989/">Course to do by sitting at Home</a></b></li>

    <li><b><a href="https://alison.com/certificate-courses">Free Online Courses (Certificate Course) </a></b></li>
    </ul></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('21.jpeg')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
          <HTMLView style={styles.p} value={htmlContentb} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class RightchoiceScreen extends React.Component {
  static navigationOptions = {
    title: 'Right Choice ?',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As mentioned above, there are large number of courses available. A student has to choose one course from the pile. This can prove to be a difficult task. Difficult it is, and it is also an important step!


    Why is selecting the right professional course so important? It is because the entire professional life and career prospects depends on the value that a course holds! Also, the course should ‘suit’ the student’s aptitude! Let me describe it to you in detail.


    Different types of courses hold different value. Some courses helps one get a job really quickly. While some other courses are commonly pursued by people around the globe and hence the job market is too saturated. Some courses used to hold much value in the past. But in present time, they barely have any value! So, looking at these factors, it is important to do a bit research about a course, before you start pursuing it! One must look at things such as career prospects, value of the course etc.


    Another thing to look for is whether the course suits the student’s aptitude or not! You see, different courses have different levels of difficulties associated with them. Some courses are too tough for average students to pursue whereas some other courses are easy to go through!


    The point is- before you select course, check whether you have the aptitude to clear the exams associated with that course! There are many aptitude and eligibility tests available. Using such tests, one may check whether the course suits them or not!


    Online aptitude tests are awesome! You may rely on these tests and get yourself evaluated while sitting at home! You may take such tests on your smartphones, laptops or desktops. Both free and paid aptitude tests are available on the internet.


    If you want a traditional experience, you may rely on career counselors. A skilled and experienced career counselor can gauge your academic aptitude and help you out accordingly. In short, choosing the right course is very important. Choosing a course that you are not capable of pursuing will have negative impact on your academic life.


    It will result in lots of wasted time if you select a course that you are not capable to pursue. You will fail in the exams and won’t be able to graduate on time! You’ll even think about dropping out too, if things go terribly wrong! In any case, it is always good to check things first, stay safe and be prepared! In this case, it can be done by just checking whether you have the aptitude to go ahead with the said course!


    If you have any doubt or query regarding a professional course, career or training program, feel free to ask it in the comment section. The question will be answered by me or my team of experts. As you can see, I’ve already answered thousands of questions. If you have any doubt, drop it in the comment section.

    
    That’s it. I think I’ve managed to list almost all the good professional courses that one could pursue after 12th Science. Remember, do not rush with the selection process. Think calmly, do a bit of research and decide which course will suit you the best. The choice you make will define your career and rest of your life to an extent! Wish you all the best!
    
    If you are having problems with Gross Choice Then Email me : 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>@kumavatvijay776gmail.com</b></p></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/18.jpg')} style={styles.d} />
        </View>
        <View style={styles.container}>
          <Text style={styles.f}>The key to success is in your hands.</Text>
          <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
          <Button
            title="Go To Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
class AboutappScreen extends React.Component {
  static navigationOptions = {
    title: 'About App',
  };
  render() {
    const htmlContent1 = `<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You will find All Best Course for you in After School.</p>`;

    const htmlContenta = `<p><b>Ex :</b><ul>

    <li>Science Stream Courses</li>
    <li>Goverment Course Link</li>
    <li>Other Course List</li>
    <li>Iti Course(Short Time's Course)</li>
    </ul></p>`;

    const htmlContentb = `<p><b>Main Options Of App :</b><ul>

    <li>After 10</li>
    <li>After 12</li>
    <li>Other Course</li>
    <li>Right Choice ?</li>
    </ul></p>`;

    const htmlContent6 = `<p>If any problem then Email me : 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>@kumavatvijay776gmail.com</b></p>`;

    const htmlContent7 = `<p><b>Best of Luck</b></p>`;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.e}>
          <Image source={require('images/22.jpg')} style={styles.z} />
        </View>
        <View style={styles.container}>
          <Text style={styles.f}>
            Hey , Its AfterSchool Application on your phone.
          </Text>
              <HTMLView style={styles.p} value={htmlContent1} stylesheet={styles} />
              <HTMLView style={styles.p} value={htmlContenta} stylesheet={styles} />
              <HTMLView style={styles.p} value={htmlContentb} stylesheet={styles} />
              <HTMLView style={styles.p} value={htmlContent6} stylesheet={styles} />
              <HTMLView style={styles.p} value={htmlContent7} stylesheet={styles} />
          <Button
            title="Go to Back"
            onPress={() => this.props.navigation.goBack()}
            color="#000"
          />
        </View>
      </ScrollView>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    After10: After10Screen,
    Science: ScienceScreen,
    Maths: MathsScreen,
    Biology: BiologyScreen,
    MathsBiology: MathsBiologyScreen,
    Commerce: CommerceScreen,
    Arts: ArtsScreen,
    Diploma: DiplomaScreen,
    ArtTeacherDiploma: ArtTeacherDiplomaScreen,
    CommercialArtDiploma: CommercialArtDiplomaScreen,
    DiplomainStenography: DiplomainStenographyScreen,
    Diplomain3DAnimation: Diplomain3DAnimationScreen,
    DiplomainBeautyCare: DiplomainBeautyCareScreen,
    DiplomainCosmetology: DiplomainCosmetologyScreen,
    DiplomainCyberSecurity: DiplomainCyberSecurityScreen,
    DiplomainAgriculture: DiplomainAgricultureScreen,
    DiplomainHotelManagementandCateringTechnology:    DiplomainHotelManagementandCateringTechnologyScreen,
    DiplomainCommercialPractice: DiplomainCommercialPracticeScreen,
    DiplomainDentalMechanics: DiplomainDentalMechanicsScreen,
    DiplomainPlasticsTechnology: DiplomainPlasticsTechnologyScreen,
    DiplomainCeramicTechnology: DiplomainCeramicTechnologyScreen,
    DiplomainEngineering: DiplomainEngineeringScreen,
    DiplomainFireSafetyEngineering: DiplomainFireSafetyEngineeringScreen,
    DiplomainFashionTechnology: DiplomainFashionTechnologyScreen,
    Iti: ItiScreen,
    Navy10: Navy10Screen,
    Army10: Army10Screen,
    Airforce10: Airforce10Screen,
    After12: After12Screen,
    Science12: Science12Screen,
    Engineering: EngineeringScreen,
    Barch: BarchScreen,
    Bpharmacy: BpharmacyScreen,
    Bba: BbaScreen,
    Cpt: CptScreen,
    Dfs: DfsScreen,
    Mnr: MnrScreen,
    Jaf: JafScreen,
    Diplomam12: Diplomam12Screen,
    Bdes: BdesScreen,
    Bopm: BopmScreen,
    Bid: BidScreen,
    Tecm: TecmScreen,
    Pdm: PdmScreen,
    Mcm: McmScreen,
    Dcosm: DcosmScreen,
    Mbbs: MbbsScreen,
    Bds: BdsScreen,
    Bp: BpScreen,
    Bams: BamsScreen,
    Pdb: PdbScreen,
    Bn: BnScreen,
    Bhms: BhmsScreen,
    Bopb: BopbScreen,
    Obc: ObcScreen,
    Diplomab12: Diplomab12Screen,
    Bums: BumsScreen,
    Baslp: BaslpScreen,
    Mcb: McbScreen,
    Tecb: TecbScreen,
    MathsBiology12: MathsBiology12Screen,
    Commerce12: Commerce12Screen,
    Arts12: Arts12Screen,
    Othercourse: OthercourseScreen,
    Rightchoice: RightchoiceScreen,
    Aboutapp: AboutappScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
  },
  f: {
    fontSize: 20,
    margin: 10,
  },
  c: {
    fontSize: 20,
    padding: 40,
    width: '100%',
  },
  e: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    padding: 10,
    fontSize: 20,
  },
  g: {
    padding: 10,
  },
  d: {
    width: 340,
    height: 200,
  },
  z: {
    width: 350,
    height: 330,
  },
  p:{
    padding: 10,
    fontSize: 17,
    textAlign:'justify',
  },
});
