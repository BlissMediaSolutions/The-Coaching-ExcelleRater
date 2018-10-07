import React, { Component } from "react";
// import axios from "axios";
// import { compose, graphql } from "react-apollo";
import Dropzone from "react-dropzone";

import Banner from "../components/common/banner";
import SuccessModal from "../components/common/successModal";
import Preloader from "../components/common/preloader";

import {
    FormGroup,
    Input,
    //InputGroup,
    //InputGroupAddon,
    Label
  } from "reactstrap";

  const maxVideoSize = 63543599; // maximum size of video in bytes
  const acceptedFiles = "video/mp4, video/avi, video/mov, video/flv, video/wmv";
  //const acceptedVideoArray = acceptedFiles.split(",").map((item) => {return item.trim()})

class VideoUpload extends Component {
    constructor(props) {    
        super(props)
        this.state = {
            VideoToUpload: null,
            files: []
        }
    }

  /*  onChange(e) {
    let fileToUpload = e.target.files;
     //console.warn("fileUpload", fileToUpload)

    let reader = new FileReader(); 
    reader.readAsDataURL(fileToUpload[0]);
    
    reader.onload = (e) => {
        console.warn("file", e.target.result)
    }
      };

      this way was used before react-dropzone was used
*/ 
      handleOnDrop = (files, rejectedFiles) => {
        console.log("accepted files", files);
        console.log("rejected files", rejectedFiles)

        if (rejectedFiles && rejectedFiles.length > 0)
        {
            const rejectedFile = rejectedFiles[0];
            const rejectedFileType = rejectedFile.type;
            const rejectedFileSize = rejectedFile.size;

            if (rejectedFileType !== acceptedFiles)
            {
                alert("Please enter a valid video type")
            }

            if (rejectedFileSize > maxVideoSize)
            {
                alert("Video selected is larger than allowed")
            }
            
        }

        const fileToUpload = files[0];
        const fileInput = new FileReader();
        fileInput.addEventListener("load", ()=>{
            console.log(fileInput.result);
            this.setState({
                video: fileInput.result
            })
        }, false)
        fileInput.readAsDataURL(fileToUpload) // converts video to base 64 for posting to database

        this.setState({
            files: this.state.files.concat(files), // used for preview of file
           });
      }

      redirectUser() {
        console.log("test form submission, data will be posted to the database soon")
      }

     

    render() {
        const {VideoToUpload, loading, successModal} = this.state;
        if (loading) {
            return <Preloader />;
          }
        return (
            
            <div className="VideoUpload">
            <Banner
            title="Video Upload"
            bgImage="https://elementvc.files.wordpress.com/2016/04/17-1.jpg?w=1075"
            />

            <div className="VideoUpload__Container container" onSubmit = {this.onFormSubmit}> 
            {VideoToUpload !== null ? <video src={VideoToUpload} /> : ''}

                <Dropzone 
                className="VideoUpload__dropzone-styling"
                onDrop={this.handleOnDrop}
                maxSize = {maxVideoSize} 
                accept={acceptedFiles} 
                multiple={false}> 
                Place file Here! Please make sure the video is under 1 minute.
                </Dropzone>

        {this.state.files.length > 0 &&
          <React.Fragment>
            <h3>View Preview of Uploaded File Below</h3>
            {this.state.files.map((file) => (
              <video width="100%" height="300" controls preload="auto"
                key={file.preview}
                src={file.preview}
                
                className="VideoUpload__preview"
              />
            ))}
          </React.Fragment>
        }  
         </div>
            <div className="VideoUpload__details container">
            
            <FormGroup className="VideoUpload__name">
            <Label>Enter a name for the video</Label>
            <Input
              type="text"
              name="videoName"
            />
            </FormGroup>

            <FormGroup className="VideoUpload__description">
            <Label>Enter a description for the video</Label>
            <Input
              type="text"
              name="videoCategory"
            />
            </FormGroup>

            <FormGroup className="VideoUpload__category">
            <Label>Enter a category for the video</Label>
            <Input
              type="text"
              name="videoCategory"
            />
            </FormGroup>

            <FormGroup className="VideoUpload__author">
            <Label>Enter an author for the video</Label>
            <Input
              type="text"
              name="videoAuthor"
            />
            </FormGroup>

           <input
                type="submit"
                onClick={this.redirectUser()}
                className="btn btn-primary"
            
            />

            <SuccessModal
              isOpen={successModal}
              toggle={this.toggleSuccessModal}
              heading="Video Successfully Uploaded!"
            />

                

            </div>
            </div>
            
        )
    }    
}

export default VideoUpload;