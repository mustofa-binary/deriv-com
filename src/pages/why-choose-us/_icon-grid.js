import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import { GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
// Icons
import ProvenTrackRecord from 'images/svg/wd-proven-track-record.svg'
import LicensedRegulated from 'images/svg/wd-licensed-regulated.svg'
import ClientProtection from 'images/svg/wd-client-money-protection.svg'
import Risk from 'images/svg/wd-risk.svg'
import Help from 'images/svg/wd-help.svg'
import Safety from 'images/svg/wd-safety.svg'

const GridCol = styled(CssGridColumn)`
    width: 100%;

    ${Text} {
        margin-top: 1.8rem;
        @media ${device.tabletL} {
            font-size: 2rem;
        }
        @media ${device.tabletS} {
            text-align: center;
        }
    }
    @media ${device.tabletS} {
        text-align: center;
    }

    * {
        max-width: 100%;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        text-align: center;
    }
`
const Container = styled.div`
    padding: 0 2rem;
`

const Col = ({ Icon, content, title }) => (
    <GridCol>
        <Icon />
        <Container>
            <StyledHeader as="h4">{title}</StyledHeader>
            <Text lh="1.55">{content}</Text>
        </Container>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.elementType,
    title: PropTypes.string,
}

export const IconGrid = () => (
    <GridContainer>
        <CssGrid
            columns="repeat(3, 1fr)"
            column_gap="13rem"
            row_gap="10rem"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="10rem"
        >
            <Col
                Icon={ProvenTrackRecord}
                title={localize('Proven track record')}
                content={localize(
                    'Binary Group – the owners of the Deriv and Binary.com brands – has a history that dates back to 1999 when we laid the groundwork for the world’s first fixed-odds trading service. Since then, we have grown from strength to strength, garnering the trust of traders around the world.',
                )}
            />
            <Col
                Icon={LicensedRegulated}
                title={localize('Licensed and regulated')}
                content={localize(
                    'Deriv is licensed and regulated by several entities who ensure that we have systems in place to protect our clients. Our regulators include the Malta Financial Services Authority (MFSA), the Labuan Financial Services Authority (Labuan FSA), the Vanuatu Financial Services Commission (VFSC), and the British Virgin Islands Financial Services Commission.',
                )}
            />
            <Col
                Icon={ClientProtection}
                title={localize('Client money protection')}
                content={localize(
                    'Deriv does not use your money for its business interests and you are allowed to withdraw your money at any time. All your money is segregated and held in secure and licensed financial institutions. In this way, in the unlikely event of Deriv becoming insolvent, all your money will be returned to you because it is never merged with ours.',
                )}
            />
            <Col
                Icon={Risk}
                title={localize('Risk awareness and management')}
                content={localize(
                    'Online trading is exciting but involves risks and can lead to an addiction. At Deriv, we look out for our customers’ best interests and encourage them to practise responsible trading. If you are new to this, you can also practise trading with unlimited virtual funds before you risk your money.',
                )}
            />
            <Col
                Icon={Help}
                title={localize('Help when you need it')}
                content={localize(
                    'The Deriv support team is available 24/7 – even on weekends. You can raise issues easily by phone and a customer service ticketing system. We also have FAQs to answer your most common questions.',
                )}
            />
            <Col
                Icon={Safety}
                title={localize('Your safety, our priority')}
                content={localize(
                    'At Deriv, we enforce best-in-class security measures such as SSL encryption to protect your account and personal data.',
                )}
            />
            <Col
                Icon={Safety}
                title={localize('Customer-first trading experience')}
                content={localize(
                    'Deriv makes it easy for anyone to start trading, understand risk, and make better trading decisions. Our tools and platforms have clear and simple instructions and are intuitively easy to navigate. We also regularly provide market news, analysis, webinars, ebooks, video tutorials and help centre articles to help you stay informed and become a better trader.',
                )}
            />
        </CssGrid>
    </GridContainer>
)
