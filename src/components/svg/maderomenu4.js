import React from 'react'

export default function Maderomenu4() {
    return (
        <div
        className="modal"
        id="staticBackdrop4"
        data-bs-backdrop="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Informacion 4
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              consectetur provident praesentium, qui vero dolorem. Quo, mollitia
              sint saepe architecto aliquid optio in quas, esse voluptate laborum,
              odio voluptatibus tempore.
            </div>
          </div>
        </div>
      </div>
    )
}
