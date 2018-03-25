import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button, Container } from 'native-base';

const FooterTabs = () => {
    return(
        <Footer style={styles.footerTab}>
            <FooterTab>
                <Container>
                    <Text style={styles.dockText} onPress={Actions.home}>My Care</Text>
                    <Button active style={styles.dockButton}>
                        <Image source={require('../../assets/images/my_care.png')} style={styles.dockIcons} />
                    </Button>
                </Container>
                <Container>
                    <Text style={styles.dockText} onPress={Actions.record}>Health Records</Text>
                    <Button style={styles.dockButton}>
                        <Image source={require('../../assets/images/health_records2.png')} style={styles.dockIcons} />
                    </Button>
                </Container>
                <Container>
                    <Text style={styles.dockText} onPress={Actions.prescription}>Prescriptions</Text>
                    <Button style={styles.dockButton}>
                        <Image source={require('../../assets/images/rx.png')} style={[styles.dockIcons, styles.rx]} />
                    </Button>

                </Container>
            </FooterTab>
        </Footer>
    )
}

const styles = StyleSheet.create({
    footerTab: {
        height: 80,
        position: "absolute",
        bottom: 0
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
    },
    rx: {
        height: 35
    },
    dockText: {
        textAlign: "center",
        marginBottom: 5,
        marginTop: 10
    }
});

export default FooterTabs;
