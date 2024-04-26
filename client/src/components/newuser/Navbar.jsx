import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import TipsAndUpdates from '@mui/icons-material/TipsAndUpdates';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { signInWithPopup} from 'firebase/auth';
import { auth, provider} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';


export default function Navbar() {
  const navigate = useNavigate();


  const handlegoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
    
      navigate('/form');
    })
  }


  const handleSubmit = (values, { setSubmitting }) => {
    validationSchema.validate(values)
      .then(() => {
        alert("Login Successful");
        navigate('/form');
      })
      .catch((errors) => {
        alert("Form validation failed. Please check the fields and try again.");
        console.error(errors);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <>
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <TipsAndUpdates />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='title'>
          Instrive SoftLabs
        </Typography>
      
      </Toolbar>
    </AppBar>
   
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', }} 
    >
      <Grid item xs={12} sm={6} md={4} lg={3} style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding:'25px' ,borderRadius:'10px'}} 
> 
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    error={errors.username && touched.username}
                    helperText={errors.username && touched.username ? errors.username : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    error={errors.password && touched.password}
                    helperText={errors.password && touched.password ? errors.password : ''}
                  />
                </Grid>
                <Grid item xs={12} style={{marginTop:'20px'}}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Divider style={{marginTop:'20px'}}>Or</Divider>
        <Button
          variant="outlined"
          onClick={handlegoogle}
          startIcon={<GoogleIcon />}
          fullWidth
          style={{marginTop:'20px'}}
        >
          Sign in with Google
        </Button>
      </Grid>
    </Grid>
   
    </>
  );
}
