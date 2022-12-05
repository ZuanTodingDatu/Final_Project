import React, {Component} from 'react';


export default class Education extends Component {
    render() {
        return (
            <section className="education" id="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <div className="education-image">
                            <img src="/images/education-logo.png"></img>
                        </div>
                        <div className="education-description">
                            Unklab University Sistem Informasi 2020-2024
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
