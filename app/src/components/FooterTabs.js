import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button, Container } from 'native-base';

const FooterTabs = () => {
    return(
        <Footer style={styles.footerTab}>
            <FooterTab>
                <Container>
                    <Button active style={styles.dockButton}>
                        <Image source={require('../../assets/images/my_care.png')} style={styles.dockIcons} />
                    </Button>
                    <Text onPress={Actions.home}>My Care</Text>
                </Container>
                <Container>
                    <Button style={styles.dockButton}>
                        <Image source={require('../../assets/images/health_records2.png')} style={styles.dockIcons} />
                    </Button>
                    <Text>Health Records</Text>
                </Container>
                <Container>
                    <Button style={styles.dockButton}>
                        <Image source={require('../../assets/images/rx.png')} style={styles.dockIcons} />
                    </Button>
                    <Text>Prescriptions</Text>
                </Container>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    footerTab: {
        height: 95,
        position: "absolute",
        bottom: -510
    },
    dockButton: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "transparent",
        marginLeft: "40%",
        paddingTop: 5,
    },
    dockIcons: {
        width: 38,
        height: 30
    }
});

export default FooterTabs;
