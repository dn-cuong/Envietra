import "./Login.css";
import gg from "./google-logo.png"
function Login() {
    return (
        <div className="background">
            <div className="login-container">
                <div className="form">
                <div className="hehe">
                    <img src="" alt="PROJECT NAME LOGO" onClick={() => window.location.href="/"}/>
                    
                    <p className="a">Start your <br />perfect trip</p>
                    <div className="logo">
                        <a href="#">
                            <div className="social-icon-circle">
                                <img className="social-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3klEQVR4nO2Y7WscVRSHJ/qXVGgzE6U1rS/YUqMFURQETf1ko3snNVVaG6tFtCJJpNZWKwpJFbEUBRso/WAK9RUSUzHpttDSVjbZii1JhGgaY8ymySbZNo8cJ+vOvsxmZ/ZlFtwfXBhmzsz+nnvPvffs1bSKKqro/yegClgHtAA/AJeB6+QuiR1cercNWFsa509x6+rnaOi9wCSFVxjYLJ1TFO+rtrJCV5z67DuKrdPAioKarwmwyVBEXuyAxUVKoXGgriDmqwM8bCjm7t0Bf05RSs3nDWEEWKmbTBomHO3GD417T6cWbtFNgmL+wd0wH8Mv9Xua2DUKJealHfkWv1XvGkA3CYn51U0wEfHbP4OuzBsm98d7v/Eg5aJaNwDvlFH6xNWae/ooTsUBgrLhl4e63QD8FgcYK0bR4E1hNyk0GwfItHw+e8B65tSG/ljejcR1dLkCmHYD8J+Z2I30Lx3rhfePJ7fH3rDi9x5NxAUH4NOv4cs+mJqB/hCMXHMGCC7Fy/czrXyeACKzy3fNj5fgjq3Q9AHcuAkLMWj+KHlUpBSxm7ZfL2SIX78T+kIFALj2d3bzA8Ow7gV4/M0EbHsX1DTC599DZAbCI/BkqzNAu0P8hubkkfAEMDzmbF4muJQZdS/D7xOJ+xt3gVSudg0OOwNszBIv6ZQXQGgos/mZOXiiFWqfh5+vJj9b0wT7OpPvyRxwAliTJV7mRF4A35xNN39zEba3w+2N0H0+/XnDfti020qHuGRDdAJoyBJ/JpwnQMeJdIOy0siz+jarh+ztZNCaF1JDiam3Oy1YyXEngAGH+F0fJ/+uJ4DUj8gan20PaD6UMCU9e+c2eOhVqyPu25kwbb+2x0s6PfAKHDqRvoR7AnjkdcpGmheAXHfW8gJQROwAMpxloBk3AJftAJKTmUqKEmvIDUBPahp19vjtn57cAUzaUgE2vAST074CvJUzgB5gbaYl8rXDvgKszxlA06gyFOFUANl5r0d9MX9Rc6saxeZUACmZ5xZ8AdjiGmBpFE7bAdR7pXc+OsGvnk+s5UTaUIyLeSkJUqvOiSm4Mloc45HZf2uraMth7tLyka6o003m9xyBs2HovQifnIQt+605IXCP7gE5dpcSOB8txKx/YXu/gHt2EJVT8bzM2yHiI5GtSSH29D549xh8dQbO/QIjYxZYdH7pyDlm/cuS+xeuQFcfHDwO2z6Eu7db39EVfxXMfEo69S8HkXdT/LRScZtWHFFVbVJvmAwW2rhuEtIVz8hvaKWQYVJrKFp1k24B0hXTLgxHDcWovKubHKgOyCZVIuMVVVSRVlb6BxcXaQBJoRXKAAAAAElFTkSuQmCC" />
                            </div>
                        </a>
                        <a href="#">
                            <div className="social-icon-circle">
                                <img className="social-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3UlEQVR4nO1Zv2sUQRReTmNhGbUy+gfYBuVEbwajZcB50VXRPv+CYrNgYVKojYaLWNgnGOHuvTVoYWlzoDGJvWcaPS+Y2NwFzMrbI0JySW52Znazwn3w4GCPme/b92PevPW8Pvrowxq+P3NIqMp5AXRfAr2SgMsSaFUq3IgNaFUoXOJnnf+ERS8ICt5Bo3R1/pRUNCkUrUigKIkJhd8E0ISEcChz4hf98IQEei4VtZMS7zJFbQFYlqOV45mQF2N0WypsWhPf6RGgnxKqt1IjPjxeGxAKX7gmLrs9Ms17uSU/WjkqAcPUycOWCCTe0w358dpApuRhK8np3Rl/5oi1gEzCBvbKCyxbkS9BeMd085HrYfSovBh9WmpGa+vtaHMz2gbddUpjdNOI/GU1d0wANUzIX7oWRh9q36P9kCAfmkYlNq7zhm//cXlxX/KJBEBcmaYSkg+HbA6pheWmawHtC37ltL4ARZM2ybf+e6OL8IMnH6MrN95YJDRN6LEPggL3KTYC/uzM2CiK88JmTaFohZvGnvy5q7TZiM06ZGB3K6nqud4COi1xLgVIhfd04n/OFem98GutbRhGOKsRQvHFI1UBXKXMvICfNTxg1ionQfVt3cwDQA2dEDKq/0kw9fKLoQBspSaglxjbNaW+APvbVnoCqJFaEmchQOolsVkZzcQDSqeM5vggE4B3e3sAwmJ+BYRntZo5CVjPnQBFX7WneZ2JWb4ECMCHWuRdXGhcCxCArRG/elJbQMcLWM6RgKdeUhT9+UHTS71LAYJHjqZzU55VHrQACegbkf8nQtG0bQIam8JnnpOPF4CvsyYvFKGU7w97zoa7Cikz8oBVZ8PdbeN1i8qUJGykqze/G3hWaVqdehD/YZ2wSeamPO7jA8ZBuLS4znPZ9rIGn46dtsOkd8I6tweJT9hUEAQFHjrx3IZ7dr54xDc7bkdi49+4wM+4JY67yjx8Zu2jD+//x19oo4EXCOs4JgAAAABJRU5ErkJggg==" />
                            </div>
                        </a>
                        <a href="#">
                            <div className="social-icon-circle">
                            <img  className="social-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="/>
                            </div>
                        </a>
                    </div>
                    </div>
                    <div className="formlogin">
                        <input type="text" placeholder="Full name" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Start</button>
                        <p>Already have an account? Log in</p>
                    </div>
                </div>
                <div className="image">
                </div>
            </div>
        </div>
    );
}

export default Login;
