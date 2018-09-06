import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div>
            <nav>
                <ul class="inline-disp">
                    <li><a class="hoverBeing increaseRead" href="Home">Home</a></li>
                    <li ><a class="hoverBeing increaseRead" href="Products">Products</a></li>
                    <li  ><a class="hoverBeing increaseRead" href="About">About</a></li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default navbar;