import React from "react";
import { IBook } from "../types";
import Modal from "./modal";

interface SingleBookProps {
  book: IBook;
}

class SingleBook extends React.Component<SingleBookProps, SingleBookProps> {
  constructor(props: SingleBookProps) {
    super(props);
    this.state = {
      book: this.props.book,
    };
  }

  render() {
    return (
      <div>
          {this.props.book.description}
        {/* <div onClick={this.showModal} className={'book-element'}>
                    <div>-----------------------------------</div>
                    <div>Название: {this.props.book.title}</div>
                    <div>Автор: {this.props.book.author}</div>
                    <div>Описание: {this.props.book.description}</div>
                    <div>Дата публикации: {this.props.book.published}</div>
                </div>
                <Modal show={this.state.show} book={this.props.book} onHideModal={() => this.setState({show: false})}/> */}
      </div>
    );
  }
}

export default SingleBook;
