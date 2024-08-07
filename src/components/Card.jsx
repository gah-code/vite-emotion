/** @jsxImportSource theme-ui */
import { Text, Container, Paragraph } from 'theme-ui';

import PropTypes from 'prop-types';

const Card = ({ title, content }) => (
  <Container
    sx={{
      padding: 4,
      backgroundColor: 'muted',
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    }}
  >
    <Text
      sx={{
        color: 'secondary',
        fs: 3,
        mb: 2,
      }}
    >
      {title}
    </Text>
    <Paragraph sx={{ color: 'secondary' }}>{content}</Paragraph>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
