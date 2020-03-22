import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Formik} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }, 
  formControl:{
      margin: theme.spacing(1),
      minWidth:120,
  },
  container: {
      marginTop: 20,
      textAlign:'center'
    },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CreateEmployeeForm () {
    const classes = useStyles();
    const [position, setPosition] = React.useState('');
    const handleChangePosition = (event) => {
        setPosition(event.target.value);
    } 
    const showMessage1 = () => {
        alert('Запись добавлена и вы остаётесь на форме регистрации сотрудника');
    };
    const showMessage2 = () => {
        alert('Запись добавлена и вы переходите на главную страницу со списком всех сотрудников');
    };
    const [division, setDivision] = React.useState('');
    const handleChangeDivision = (event) => {
        setDivision(event.target.value);
    }
    return (
        <div className={classes.root}> 
        <Formik>
            {props => (
              <form>
              <Grid container spacing={3}>
                  <Grid container xs={6} spacing={3} className={classes.container}>
                    <Grid item xs={12}>
                        <TextField id='name' label='Имя' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='surname' label='Фамилия' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id='patronymic' label='Отчество' variant='outlined'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id='date'
                        label='Дата рождения'
                        type='date'
                        InputLabelProps={{shrink:true}}
                        variant='outlined'
                        />
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField
                        id='personal-number'
                        label='Табельный номер'
                        type='number'
                        InputLabelProps={{shrink:true}}
                        variant='outlined'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant='outlined' className={classes.formControl}>
                            <InputLabel id='position-label'>Должность</InputLabel>
                        <Select
                            id='position'
                            labelId='position-label'
                            value={position}
                            onChange={handleChangePosition}
                        >
                            <MenuItem value={'director'}>Директор</MenuItem>
                            <MenuItem value={'bookkepper'}>Бухгалтер</MenuItem>
                            <MenuItem value={'manager'}>Менеджер</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant='outlined' className={classes.formControl}>
                        <InputLabel id='division-label'>Подразделение</InputLabel>
                        <Select
                        id='division'
                        labelId='division-label'
                        value={division}
                        onChange={handleChangeDivision}
                        >
                        <MenuItem value={'division-clients'}>Отдел по работе с клиентами</MenuItem>
                        <MenuItem value={'division-developers'}>Отдел разработки</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container xs={6} spacing={3} className={classes.container}>
                        <Grid item xs={12}>
                            <Button variant='contained' color='secondary' onClick={showMessage1}>
                                 Добавить запись и вернуться обратно
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' color='secondary' onClick={showMessage2}>
                                Добавить запись и перейти на главную страницу
                            </Button>
                        </Grid>
                  </Grid>
              </Grid>
              </form>  
            )}
        </Formik>
        </div>
    )
}

export default CreateEmployeeForm;