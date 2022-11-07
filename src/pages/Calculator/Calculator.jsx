import React from "react";
import { CalculatorContainer, LoanAmountCotiner } from "./CalculatorEliment";
import { Divider, Typography,TextField } from "@mui/material";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

const Calculator = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
       
      }}
    >
      <Typography variant="h5" >
        Calculator
      </Typography>
      <CalculatorContainer>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ borderRight: "1px solid black" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Loan Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                defaultValue={30}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                // step={10}

                min={10}
                max={110}
              />
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Interest Rate
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">%</InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                defaultValue={30}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                // step={10}

                min={10}
                max={110}
              />
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 15px",
              }}
            >
              <FormControl>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Loan Tenure
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  endAdornment={
                    <InputAdornment position="start">
                      {" "}
                      <ButtonGroup
                        style={{ margin: "0" }}
                        aria-label="Disabled elevation buttons"
                      >
                        <Button>Yr</Button>
                        <Button>Mo</Button>
                      </ButtonGroup>
                    </InputAdornment>
                  }
                  label="Amount"
                />
              </FormControl>
              <Slider
                style={{ margin: "5px 0" }}
                aria-label="Temperature"
                defaultValue={30}
                // getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                // step={10}

                min={10}
                max={110}
              />
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <LoanAmountCotiner>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',flexDirection:"column"}} >
              <Typography variant="overline" display="block" gutterBottom>
                Loan EMI
              </Typography>

              <TextField
         
          id="outlined-size-small"
          
          size="small"
        />
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
              <Typography variant="overline" display="block" gutterBottom>
                Total Interest Payable
              </Typography>

              <TextField
              
         
          id="outlined-size-small"
          
          size="small"
        />
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
              <Typography variant="overline" display="block" gutterBottom>
                Total Payment (Principal + Interest)
              </Typography>

              <TextField
         
          id="outlined-size-small"
          
          size="small"
        />
            </div>
          </LoanAmountCotiner>
        </div>
      </CalculatorContainer>
    </div>
  );
};

export default Calculator;
