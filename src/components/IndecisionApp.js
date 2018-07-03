import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handlePick = () => {
        const randomdNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomdNum];
        this.setState(() => ({
            selectedOption: option
        }));         
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Ender valid Value to Add';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        } 
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined  }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing at all
        }        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }  
   
    render() {
        const subTitle = "Put your life in the hands of a computer";
              
        return (
            <div>
                <Header subtitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}/>
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
