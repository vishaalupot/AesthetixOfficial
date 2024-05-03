import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: space-between;
  padding: 4rem 4rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem; /* Add space between number and text */
  color:#9b00a9;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #105187;
  margin: 0;
  font-weight: 500;

`;

function StatsComponent() {
  const [counters, setCounters] = useState({
    projectsCompleted: 0,
    topSystems: 0,
    repeatBusiness: 0,
    countriesServed: 0
  });

  useEffect(() => {
    const targetValues = {
      projectsCompleted: 10000,
      topSystems: 10,
      repeatBusiness: 98,
      countriesServed: 20
    };

    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        projectsCompleted: Math.min(
          prevCounters.projectsCompleted + 500, // Increment by 100 (adjust as needed for smoother animation)
          targetValues.projectsCompleted
        ),
        topSystems: Math.min(
          prevCounters.topSystems + 1, // Increment by 1
          targetValues.topSystems
        ),
        repeatBusiness: Math.min(
          prevCounters.repeatBusiness + 1, // Increment by 1
          targetValues.repeatBusiness
        ),
        countriesServed: Math.min(
          prevCounters.countriesServed + 1, // Increment by 1
          targetValues.countriesServed
        )
      }));
    }, 50); // Interval in milliseconds (adjust for smoother/faster animation)

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Column>
        <Number>{'>'}{counters.projectsCompleted}</Number>
        <Text>AV Projects Completed</Text>
      </Column>
      <Column>
        <Number>{counters.repeatBusiness}%</Number>
        <Text>Of Customers Repeat Business</Text>
      </Column>
      <Column>
        <Number>{counters.countriesServed}</Number>
        <Text>Years of experience</Text>
      </Column>
    </Container>
  );
}

export default StatsComponent;
