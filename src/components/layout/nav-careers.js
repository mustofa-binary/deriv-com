import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledNav, StyledLink, NavWrapper, LogoLink, Wrapper, NavLeft } from './nav'
import { localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/utility'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const CareerRight = styled.div`
    display: flex;
    justify-self: flex-end;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
`

const CareerLogo = styled(LogoLink)`
    margin-right: 3.2rem;
`

export const NavCareers = () => {
    const data = useStaticQuery(query)
    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <Wrapper>
                        <NavLeft>
                            <CareerLogo to={'/'} aria-label={localize('Home')}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={localize('Deriv')}
                                    width="16.4rem"
                                    height="auto"
                                />
                            </CareerLogo>
                            <StyledLink
                                activeClassName="active"
                                to="/careers"
                                aria-label={localize('Careers home')}
                                partiallyActive={true}
                            >
                                HOME
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/careers/locations/"
                                aria-label={localize('Locations')}
                                partiallyActive={true}
                            >
                                LOCATIONS
                            </StyledLink>
                        </NavLeft>
                        <CareerRight>
                            <LinkButton
                                external
                                secondary
                                to={zoho_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                ml="2.4rem"
                            >
                                Explore jobs
                            </LinkButton>
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}