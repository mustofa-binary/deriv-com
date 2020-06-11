import React from 'react'
import { SmallContainer, Hero } from '../components/_style'
import WhatAreTheOptions from './_what-are-options'
import HowOptionsWorks from './_how-options-works'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const Options = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Options')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Options')}
                    </Header>
                </SmallContainer>
            </Hero>
            <WhatAreTheOptions />
            <HowOptionsWorks />
        </Layout>
    )
}

export default WithIntl()(Options)