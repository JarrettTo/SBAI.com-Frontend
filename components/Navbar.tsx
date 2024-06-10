import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import Image from 'next/image';
const NavBar = () => {
    const [selected, setSelected] = useState('NBA');
    const router = useRouter();

    useEffect(() => {
        // Function to determine the selected tab based on the pathname
        const determineSelection = (pathname) => {
            if (pathname=="/") {
                return 'NBA';
            } else if (pathname.startsWith('/mlb')) {
                return 'MLB';
            } else if (pathname.startsWith('/premier-league')) {
                return 'Premier League';
            } else if (pathname.startsWith('/news')) {
                return 'News';
            } else if (pathname.startsWith('/documentation')) {
                return 'Documentation';
            }
            return '';
        };

        // Update the selected state based on the current path
        setSelected(determineSelection(router.pathname));
    }, [router.pathname]);
    const handleNBAClick = () => {
        router.push('/');
    };

    const handleMLBClick = () => {
        router.push('/mlb');
    };

    const handlePLClick = () => {
        router.push('/premier-league');
    };
    const handleBlogClick = () => {
        router.push('/news');
    };
    const handleDocumentationClick = () => {
        router.push('/documentation');
    };
  return (
    <div className='flex flex-row items-center justify-center mt-3 mb-3' style={{width:'90%', height:'100px'}}>
        <div className='flex flex-row items-center justify-between' style={{width:'90%', height:'100px'}}>
            <div style={{display : "flex", flexDirection : "column",alignItems:"center",justifyContent:"center", fontWeight:'800'}}>
                <Image src={"/images/logo.webp"} height={100} width={100} alt="Sports X AI logo"></Image>
            </div>
            <Stack direction="row" spacing={2} sx={{ p: 1, bgcolor: '#FFFFFF', borderRadius: '20px' }}>
                <Button
                    variant="contained"
                    onClick={handleNBAClick}
                    disableElevation
                    sx={{
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        color: selected === 'NBA' ? '#1C1C1C' : 'darkgray',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Set hover & focus to the same color as normal state
                    
                            }
                    }}
                >
                    NBA
                </Button>
                <Button
                    variant="contained"
                    onClick={handleMLBClick}
                    disableElevation
                    sx={{
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        color: selected === 'MLB' ? '#1C1C1C' : 'darkgray',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Set hover & focus to the same color as normal state
                        
                            }
                    }}
                >
                    MLB
                </Button>
                <Button
                    variant="contained"
                    onClick={handlePLClick}
                    disableElevation
                    sx={{
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        color: selected === 'Premier League' ? '#1C1C1C' : 'darkgray',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Set hover & focus to the same color as normal state
                            
                            }
                    }}
                >
                    Premier League
                </Button>
                <Button
                    variant="contained"
                    onClick={handleBlogClick}
                    disableElevation
                    sx={{
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        color: selected === 'News' ? '#1C1C1C' : 'darkgray',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Set hover & focus to the same color as normal state
                            
                            }
                    }}
                >
                    News
                </Button>
                <Button
                    variant="contained"
                    onClick={handleDocumentationClick}
                    disableElevation
                    sx={{
                        fontSize: '14px',
                        backgroundColor: '#FFFFFF',
                        color: selected === 'Documentation' ? '#1C1C1C' : 'darkgray',
                        borderRadius: '10px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Set hover & focus to the same color as normal state
                            
                            }
                    }}
                >
                    Documentation
                </Button>
            </Stack>
            <div style={{display : "flex", flexDirection : "row",alignItems:"center",justifyContent:"center", fontWeight:'800'}}>
                <Button
                    variant="outlined"
                    onClick={handleDocumentationClick}
                    disableElevation
                    sx={{
                        fontSize:'14px',
                        minWidth:'100px',
                        backgroundColor: 'transparent',  // Set background to transparent
                        color: '#1E88E5',  // Set text color to the previous background color
                        borderColor: '#1E88E5',
                        borderRadius: '10px', // Rounded corners
                        textTransform: 'none', // Avoid uppercase transformation
                       
                        marginRight:'10px',
                        '&:hover': {
                            backgroundColor: '#1E88E5', // Set hover & focus to the same color as normal state
                            borderColor: 'transparent',
                            color:'#FFFFFF',
                          
                        }
                    }}
                >
                    Sign Up
                </Button>
                <Button
                    variant="contained"
                    onClick={handleDocumentationClick}
                    disableElevation
                    style={{
                        fontSize:'14px',
                        paddingRight:'30px',
                        paddingLeft:'30px',
                        backgroundColor: '#1E88E5', // Set the background color
                        borderRadius: '10px', // Rounded corners
                        textTransform: 'none', // Avoid uppercase transformation
                        fontWeight: 'bold',
                        color:'white'
                    }}
                >
                    Sign In
                </Button>
            </div>
        </div>
    </div>
  );
};

export default NavBar;