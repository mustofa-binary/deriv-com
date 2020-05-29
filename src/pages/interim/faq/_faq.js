import React from 'react'
import styled from 'styled-components'
import {
    WhyRebrand,
    WhatChanges,
    IsBeingBought,
    NewProducts,
    WhatToExpect,
    IsDerivRegulated,
    AreCloseDown,
    WhySwitch,
    CanStillTrade,
    HowToGetStarted,
} from './_faq-data'
import { Container, SectionContainer, Flex } from 'components/containers'
import {
    Header,
    Text,
    Accordion,
    AccordionItem,
    Divider,
    LocalizedLinkText,
} from 'components/elements'
import { localize, Localize } from 'components/localization'
import { binary_url } from 'common/utility'

const Question = styled.div`
    max-width: 38.4rem;
    margin-right: 1.6rem;
`

const Answer = styled.div`
    width: 100%;
    max-width: 69rem;
`

const FAQ = () => {
    const parent_style = {
        marginBottom: '2.4rem',
    }
    const item_style = {
        padding: '2.4rem',
        background: 'var(--color-grey-4)',
        maxWidth: '64.2rem',
    }
    const header_style = {
        padding: '1.6rem 2.4rem',
        border: 'none',
    }
    return (
        <SectionContainer background="var(--color-grey-8)">
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            {localize('What is the rebranding about?')}
                        </Header>
                        <Text>
                            {localize(
                                'We may have a new name and look, but be assured that we’re still the same team working hard since 1999 to deliver an exceptional online trading solution to our clients.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize('Why are you rebranding?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhyRebrand />
                            </AccordionItem>
                            <AccordionItem
                                header={localize('What changes will I see?')}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatChanges />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Is <0>Binary.com</0> being bought over by another company?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <IsBeingBought />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            <Localize
                                translate_text="How will <0>Deriv.com</0> transform my trading experience?"
                                components={[<LocalizedLinkText key={0} weight="bold" to="/" />]}
                            />
                        </Header>
                        <Text>
                            {localize(
                                'After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs.',
                            )}
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={localize(
                                    'What are the new products and services offered as a result of this rebranding?',
                                )}
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <NewProducts />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="What else can we expect from <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhatToExpect />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Is <0>Deriv.com</0> regulated/registered/licensed?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <IsDerivRegulated />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Are you going to close down <0>Binary.com</0>?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <AreCloseDown />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
                <Divider width="100%" height="1px" m="8rem 0" />
            </Container>
            <Container direction="column">
                <Flex jc="space-between">
                    <Question>
                        <Header as="h3" mb="0.8rem" lh="1.25">
                            {localize('What does it mean to me?')}
                        </Header>
                        <Text>
                            <Localize
                                translate_text="We understand that change can be intimidating. That’s why we’ve been working very hard to make sure that your transition from <0>Binary.com</0> to <1>Deriv.com</1> is as seamless as possible."
                                components={[
                                    <LocalizedLinkText
                                        key={0}
                                        external
                                        to={binary_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />,
                                    <LocalizedLinkText key={1} to="/" />,
                                ]}
                            />
                        </Text>
                    </Question>
                    <Answer>
                        <Accordion has_single_state>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Why should I switch to <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <WhySwitch />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="Can I still trade on <0>Binary.com</0>?"
                                        components={[
                                            <LocalizedLinkText
                                                key={0}
                                                external
                                                weight="bold"
                                                to={binary_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <CanStillTrade />
                            </AccordionItem>
                            <AccordionItem
                                header={
                                    <Localize
                                        translate_text="How do I get started on <0>Deriv.com</0>?"
                                        components={[
                                            <LocalizedLinkText key={0} weight="bold" to="/" />,
                                        ]}
                                    />
                                }
                                parent_style={parent_style}
                                style={item_style}
                                header_style={header_style}
                                plus
                            >
                                <HowToGetStarted />
                            </AccordionItem>
                        </Accordion>
                    </Answer>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default FAQ