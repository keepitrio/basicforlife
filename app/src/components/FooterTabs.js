import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button } from 'native-base';

const FooterTabs = () => {
    return(
        <Footer style={styles.footerTab}>
            <FooterTab>
                <Button active>
                    <Text onPress={Actions.home}>My Care</Text>
                </Button>
                <Button>
                    <Text>Health Records</Text>
                </Button>
                <Button>
                    <Text>Prescriptions</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    footerTab: {
        position: "absolute",
        bottom: 0
      }
});

export default FooterTabs;
