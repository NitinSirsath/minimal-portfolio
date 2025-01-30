import {
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  X as XIcon,
} from '@mui/icons-material';
import { Box, Typography, Avatar, Stack, Tooltip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { personalInfo } from '../../../../components/data/about';

const Introduction = () => {
  return (
    <Box textAlign="left" sx={{ mb: 4 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Avatar
            src={personalInfo.profileImage}
            sx={{ width: 200, height: 200, mb: 2, border: '4px solid #FCD44C', bgcolor: '#B71C1C' }}
          />
        </motion.div>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FCD44C' }}>
          {personalInfo.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {personalInfo.role}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {personalInfo.bio}
        </Typography>

        {/* Contact Information with Proper Icon Alignment */}
        <Stack spacing={1} sx={{ mt: 2 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Tooltip title="Location" arrow>
                <PinDropIcon fontSize="small" />
              </Tooltip> */}
            <Typography variant="body2">{personalInfo.location}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Tooltip title="Email" arrow>
                <ContactMailIcon fontSize="small" />
              </Tooltip> */}
            <Typography variant="body2">
              <a href={`mailto:${personalInfo.contact.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {personalInfo.contact.email}
              </a>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Tooltip title="Phone" arrow>
                <CallIcon fontSize="small" />
              </Tooltip> */}
            <Typography variant="body2">
              <a href={`tel:${personalInfo.contact.phone}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {personalInfo.contact.phone}
              </a>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Tooltip title="Portfolio Website" arrow>
                <PermIdentityIcon fontSize="small" />
              </Tooltip> */}
            <Typography variant="body2">
              <a
                href={personalInfo.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {personalInfo.contact.website}
              </a>
            </Typography>
          </Stack>
        </Stack>

        {/* Social Links */}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Tooltip title="LinkedIn" arrow>
            <IconButton component="a" href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon color="disabled" />
            </IconButton>
          </Tooltip>

          <Tooltip title="X (Twitter)" arrow>
            <IconButton component="a" href={personalInfo.socials.x} target="_blank" rel="noopener noreferrer">
              <XIcon color="disabled" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Instagram" arrow>
            <IconButton component="a" href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon color="disabled" />
            </IconButton>
          </Tooltip>

          <Tooltip title="YouTube" arrow>
            <IconButton component="a" href={personalInfo.socials.youtube} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon color="disabled" />
            </IconButton>
          </Tooltip>
        </Stack>
      </motion.div>
    </Box>
  );
};

export default Introduction;
