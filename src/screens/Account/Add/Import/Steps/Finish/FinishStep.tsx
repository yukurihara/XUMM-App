/* eslint-disable jsx-a11y/accessible-emoji */

/**
 * Import Account/Finish  Screen
 */

import React, { Component } from 'react';
import { SafeAreaView, View, ImageBackground, Text } from 'react-native';

import { Images } from '@common/helpers/images';

// components
import { Button, Footer } from '@components';

import Localize from '@locale';

import { ImportSteps, AccountObject } from '@screens/Account/Add/Import/types';

// style
import { AppStyles } from '@theme';
import styles from './styles';

/* types ==================================================================== */
export interface Props {
    goBack: (step?: ImportSteps, settings?: AccountObject) => void;
    goNext: (step?: ImportSteps, settings?: AccountObject) => void;
}

export interface State {}

/* Component ==================================================================== */
class FinishStep extends Component<Props, State> {
    render() {
        const { goNext } = this.props;
        return (
            <SafeAreaView style={[AppStyles.container]}>
                <ImageBackground
                    testID="account-import-finish-view"
                    source={Images.backgroundPattern}
                    style={[AppStyles.container]}
                    imageStyle={styles.backgroundImageStyle}
                >
                    <View
                        style={[
                            AppStyles.flex1,
                            AppStyles.paddingSml,
                            AppStyles.centerAligned,
                            AppStyles.centerContent,
                        ]}
                    >
                        <Text style={styles.emojiIcon}>🎉</Text>
                        <Text style={AppStyles.h5}>{Localize.t('account.accountImportCompleted')}</Text>
                        <Text style={[AppStyles.p, AppStyles.textCenterAligned, AppStyles.paddingHorizontal]}>
                            {Localize.t('account.youJustImportedAccount')}
                        </Text>
                    </View>

                    <Footer>
                        <Button
                            label={Localize.t('account.yeahLetsGo')}
                            onPress={() => {
                                goNext();
                            }}
                        />
                    </Footer>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

/* Export Component ==================================================================== */
export default FinishStep;
