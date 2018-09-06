import React, {Component} from 'react';

class EmailForm extends Component {

    render () {
        return (
                <form >
                    <div class="formFormat">
                            <label>
                                Name:
                                <input type="text" name="name" />
                                <br></br>
                            </label >
                            <label>
                                Email:
                                <input type="text" name="email" />
                                <br></br>
                            </label>
                            <label>
                                Details:
                                <textarea type="text" name="detail" />
                                <br></br>
                            </label>
                            <label>
                                Contact:
                                <input type="text" name="phone" />
                                <br></br>
                            </label>
                            <input type="submit" value="Submit" />
                            </div>
                </form>
        );
    }

}

export default EmailForm;