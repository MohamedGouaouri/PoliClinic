import React from "react"
import styled, {css} from "styled-components";
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import overview from '../assets/images/overview.svg'
import stats from '../assets/images/stats.svg'
import patients from '../assets/images/patients.png'
import polyclinic from '../assets/images/polyclinic.svg'
import doctors from '../assets/images/doctors.svg'
import medicines from '../assets/images/medicines.svg'
import messages from '../assets/images/messages.svg'
import settings from '../assets/images/settings.svg'

const SideBar = () => {
    const LeftSide = styled.div`
      height: 100%;
      width: 20%;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    const SideBarHeader = styled.div`
      padding: 1rem;
    `
    const SectionTitle = styled.h4`
      text-transform: uppercase;
      color: var(--clr-light-text);
      padding: 0;
    `
    const SideBarList = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
    `

    return (
        <LeftSide>
            <SideBarHeader>
                <img src={logo} alt={logo}/>
            </SideBarHeader>

            <SectionTitle>
                Management
            </SectionTitle>

            <SideBarList>
                <SideBarListItem
                    text={"Overview"}
                    image={overview}
                    selected={true}
                    route={"/"}
                />

                <SideBarListItem
                    text={"Statistics"}
                    image={stats}
                    selected={false}
                    route={"/stats"}
                />

                <SideBarListItem
                    text={"Patients"}
                    image={patients}
                    selected={false}
                    route={"patients"}

                />

                <SideBarListItem
                    text={"Polyclinic"}
                    image={polyclinic}
                    selected={false}
                    route={"polyclinic"}
                />

                <SideBarListItem
                    text={"Doctors"}
                    image={doctors}
                    selected={false}
                    route={"medicines"}
                />

                <SideBarListItem
                    text={"Medicines"}
                    image={medicines}
                    selected={false}
                    route={"medicines"}
                />


            </SideBarList>


            <SectionTitle>
                Support
            </SectionTitle>

            <SideBarList>

                <SideBarListItem
                    text={"Messages"}
                    image={messages}
                    selected={false}
                    route={"messages"}
                />

                <SideBarListItem
                    text={"Settings"}
                    image={settings}
                    selected={false}
                    route={"settings"}
                />

            </SideBarList>



        </LeftSide>
    )
}

const SideBarListItem = ({text, image, selected, route}) => {
    const ListItem = styled.li`
      display: inline-flex;
      width: 100%;
      justify-content: center;
      padding: 1rem 0;

      &:hover {
        cursor: pointer;
        background: rgb(234, 242, 255);

      }

      ${props =>
              selected && css`
                border-left: 5px var(--clr-primary) solid;
                background: rgb(126, 172, 255);
                background: linear-gradient(90deg, rgb(174, 201, 248) 0%, rgba(255, 255, 255, 1) 100%);
              `
      }
    `
    return (
        <Link to={route}>
            <ListItem>
                <img src={image} alt={""} style={{
                    paddingRight: "1rem"
                }}/>
                <div style={{
                    color: "var(--clr-light-text)",
                    fontWeight: "bold"
                }}>
                    {text}
                </div>
    
            </ListItem>
        </Link>

    )
}

export default SideBar