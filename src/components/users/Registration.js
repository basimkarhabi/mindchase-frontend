import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid , Paper,TextField,Typography ,Button,Avatar,Link, Input} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'

const Registration=()=>{
    const { register, handleSubmit, formState: { errors } , watch, control } = useForm()
    const submit = (data) => {
        console.log("submit")
        axios
        .post(`${process.env.REACT_APP_API}/users/register`, data)
        .then((response) => {
                    console.log(response)
        })
        .catch((error) => {
            console.log(errors)
        })   
    }

    const paperStyle={padding :25,height:'78vh',width:310, margin:"180px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0' ,color:'red'}

    return(
        <form onSubmit={handleSubmit(submit)} >
        <Grid >    
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Welcome to digital campus</h2>
                </Grid>

                <TextField
                    label="name"
                    placeholder='Enter username'
                    type='name'
                    fullWidth required
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({ field }) => <Input {...field} fullWidth />}
                />
                 {errors.password && <div>you forget hire</div>}
                 <TextField
                    label="email@example.example"
                    name="email"
                    type='email'
                    fullWidth required
                    control={control}
                    defaultValue=""
                    rules={{...register("email", {required: true, pattern: /^\S+@\S+$/i})}}
                    render={({ field }) => <Input {...field} fullWidth />}
                />
                 {errors.password && <div>you forget hire</div>}

                <TextField 
                    label='Enter password' 
                    placeholder='Password enter 8 character' 
                    type='password' 
                    fullWidth required
                    {...register("password", {required: true, minLength: 8})} 
                />
                 {errors.password && <div>Password is required</div>}

                <TextField label='confirm Password' 
                placeholder='rPassword repeat' 
                type='password' 
                fullWidth required
               {...register("password_repeat", {validate: (value) => {
                return value === watch('password'); // value is from password_repeat and watch will return value from password
                }})} 
                />
                  {errors.password_repeat && <div>Password is not the same</div>}

                <FormControlLabel control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            type='checkbox'

                        />
                }
                label="Remember me" 
        
                
                /> 

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                <Typography > Do you have an account ? 
                    <Link href="/register" > Sign in  </Link>
                </Typography>
            </Paper>
            
    </Grid>
    </form>
    )
}

export default Registration
