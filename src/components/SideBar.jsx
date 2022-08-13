import React, {useState} from "react"
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

    const [selectedItemIndex, setSelectedItemIndex] = useState(0)

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
                    selected={selectedItemIndex === 0}
                    route={"/"}
                    onClick={
                        () => setSelectedItemIndex(0)
                    }
                />

                <SideBarListItem
                    text={"Statistics"}
                    image={stats}
                    selected={selectedItemIndex === 1}
                    route={"/stats"}
                    onClick={
                        () => setSelectedItemIndex(1)
                    }
                />

                <SideBarListItem
                    text={"Patients"}
                    image={patients}
                    selected={selectedItemIndex === 2}
                    route={"patients"}
                    onClick={
                        () => setSelectedItemIndex(2)
                    }

                />

                <SideBarListItem
                    text={"Polyclinic"}
                    image={polyclinic}
                    selected={selectedItemIndex === 3}
                    route={"polyclinic"}
                    onClick={
                        () => setSelectedItemIndex(3)
                    }
                />

                <SideBarListItem
                    text={"Doctors"}
                    image={doctors}
                    selected={selectedItemIndex === 4}
                    route={"medicines"}
                    onClick={
                        () => setSelectedItemIndex(4)
                    }
                />

                <SideBarListItem
                    text={"Medicines"}
                    image={medicines}
                    selected={selectedItemIndex === 5}
                    route={"medicines"}
                    onClick={
                        () => setSelectedItemIndex(5)
                    }
                />


            </SideBarList>


            <SectionTitle>
                Support
            </SectionTitle>

            <SideBarList>

                <SideBarListItem
                    text={"Messages"}
                    image={messages}
                    selected={selectedItemIndex === 6}
                    route={"messages"}
                    onClick={
                        () => setSelectedItemIndex(6)
                    }
                />

                <SideBarListItem
                    text={"Settings"}
                    image={settings}
                    selected={selectedItemIndex === 7}
                    route={"settings"}
                    onClick={
                        () => setSelectedItemIndex(7)
                    }
                />

            </SideBarList>



        </LeftSide>
    )
}

const SideBarListItem = ({text, image, selected, route, onClick}) => {
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
        <Link to={route} onClick={onClick}>
            <ListItem >
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