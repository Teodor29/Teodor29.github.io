import { Link } from 'react-router-dom';
import { Box} from '@mui/material';

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box>
      <h1>Teodor Lien</h1>
      <h2>Frontend Developer</h2>
      <p>Student</p>

      <Box className="nav-links" sx={{ 
            gap: 2, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-start'
        }}>
        <Link to="#home" onClick={() => handleScroll('home')}>Home</Link>
        <Link to="#skills" onClick={() => handleScroll('skills')}>Skills</Link>
        <Link to="#projects" onClick={() => handleScroll('projects')}>Projects</Link>
      </Box>
    </Box>
  );
}

export default Header;