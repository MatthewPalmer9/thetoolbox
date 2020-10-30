import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {
    render() {
        return (
            <>
                <nav>
                    <div className="brand">
                        <a href="/"><img src="./logo.png"></img></a>
                    </div>
                </nav>
            </>
        )
    }
}
