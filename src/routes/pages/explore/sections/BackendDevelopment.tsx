import { Typography, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CenterWrapper from '../../../../components/wrappers/CenterWrapper';

const BackendDevelopment = () => {
  const theme = useTheme();

  return (
    <CenterWrapper>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}>
          Backend Development & My Perspective 🛠️
        </Typography>

        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.2, duration: 0.6 }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              Backend development has always fascinated me—there’s something **powerful** about **structuring data, handling
              requests efficiently, and making APIs work seamlessly**.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              I started with **Express.js & MongoDB**, then moved into **serverless technologies** like **AWS Lambda,
              DynamoDB, and Firestore**. Recently, I’ve fallen in love with **SQL**—especially **Supabase & PostgreSQL**.
            </Typography>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, '&:hover': { color: theme.palette.primary.main, transition: 'color 0.3s ease' } }}
            >
              My **philosophy** when building backends is **"think from the frontend user’s perspective."** I believe APIs
              should be **fast, secure, and optimized for the frontend experience**.
            </Typography>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Tech Icons Section */}
      {/* <Stack direction="row" justifyContent="center" spacing={3} sx={{ mt: 3 }}>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiExpress size={30} color={theme.palette.text.primary} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiMongodb size={30} color={theme.palette.text.primary} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiAwsamplify size={30} color={theme.palette.text.primary} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiPostgresql size={30} color={theme.palette.text.primary} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiFirebase size={30} color={theme.palette.text.primary} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
          <SiSupabase size={30} color={theme.palette.text.primary} />
        </motion.div>
      </Stack> */}

      <Divider sx={{ my: 4 }} />
    </CenterWrapper>
  );
};

export default BackendDevelopment;
