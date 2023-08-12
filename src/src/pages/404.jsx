import styled from 'styled-components';
import Head from '../components/Head';

const Section = styled.section``;

const Container = styled.div``;

const NotFoundPage = () => (
  <>
    <Head />
    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </>
);

export default NotFoundPage;
