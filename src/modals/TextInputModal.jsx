import React from "react";
import { useState, useEffect } from "react";

import { auth, db } from "../utils/firebase";

import { doc, collection, getDoc, addDoc, updateDoc } from "firebase/firestore";

const TextInputModal = (props) => {
    const [text, setText] = useState(`Enter ${props.boxName.toLowerCase()} here`);
    const test = "test";


    const onSubmit = async () => {
        const playbookBoxRef = doc(db, "playbooks", props.playbookId);

        if (props.dataName === "problemDescriptionBox")  {
            await updateDoc(playbookBoxRef, {
                problemDescriptionBox: "done"
            });
        }
        else if (props.dataName === "counterMeasuresBox") {
            await updateDoc(playbookBoxRef, {
                counterMeasuresBox: text,
            })
        }
        else if (props.dataName === "currentStateBox") {
            await updateDoc(playbookBoxRef, {
                currentStateBox: text,
            })
        }
        else if (props.dataName === "implementationPlanBox") {
            await updateDoc(playbookBoxRef, {
                implementationPlanBox: text,
            })
        }
        else if (props.dataName === "targetImprovementBox") {
            await updateDoc(playbookBoxRef, {
                targetImprovementBox: text,
            })
        }
        else if (props.dataName === "verifyBox") {
            await updateDoc(playbookBoxRef, {
                verifyBox: text,
            })
        }
        else if (props.dataName === "rootCauseAnalysisBox") {
            await updateDoc(playbookBoxRef, {
                rootCauseAnalysisBox: text,
            })
        }
        else if (props.dataName === "updateStandardWorkBox") {
            await updateDoc(playbookBoxRef, {
                updateStandardWorkBox: text,
            })
        }
        else {
            console.log("Not a valid box");
        }
    }

    const fetchData = async () => {
        
    }

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div classname="modal-header">
                    <h4 className="modal-title">{props.boxName}</h4>
                </div>
                <div classname="modal-body">
                    <textarea 
                        name="playbookBoxContent"
                        placeholder={text}
                        rows={10}
                        cols={60}
                        onChange={(e) => setText(e)}
                    />
                </div>
                <div className="modal-footer">
                    <button className="submit_button" onClick={onSubmit}>Submit</button>
                    <button className="button" onClick={props.onClose}>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default TextInputModal;