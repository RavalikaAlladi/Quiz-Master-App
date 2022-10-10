import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './config';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      teamsRank: [],
    };
  }

  showTeamRanks = () => {
    var teams = [];
    var teamRef = db.ref('teams/');
    teamRef.on('value', (data) => {
      var teamList = data.val();
      for (var team in teamList) {
        if (teamList[team]['isBuzzerPressed'] === true) {
          teamList[team]['teamName'] = team;
          teams.push(teamList[team]);
        }
      }
      teams.sort(function (team1, team2) {
        return team1.timestamp - team2.timestamp;
      });
      this.setState({ teamsRank: teams });
      teams = [];
    });
  };

  resetDB = () => {
    db.ref('teams/').set({
      red: {
        enabled: true,
        isBuzzerPressed: false,
        timestamp: 0,
      },
      green: {
        enabled: true,
        isBuzzerPressed: false,
        timestamp: 0,
      },
      blue: {
        enabled: true,
        isBuzzerPressed: false,
        timestamp: 0,
      },
      yellow: {
        enabled: true,
        isBuzzerPressed: false,
        timestamp: 0,
      },
    });
    this.setState({teamsRank: []})
  };

  componentDidMount() {
    this.showTeamRanks();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.state.teamsRank.map((team) => (
            <View
              style={{
                width: 140,
                height: 55,
                borderWidth: 2,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: team.teamName,
              }}>
              <Text>{team.teamName.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        <Button
          title="Reset"
          onPress={() => {
            this.resetDB();
          }}
        />
      </View>
    );
  }
}
