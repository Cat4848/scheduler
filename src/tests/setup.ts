import { displaySchedulesNames } from "../lib/display";
import schedules from "../database/schedules";
import { attachEventHandlerOnViewScheduleNames } from "..";
import { userEvent } from "@testing-library/user-event";

export function setup() {
  document.body.innerHTML = `
    <body>
      <main>
        <!-- Modal Overlay-->
        <div class="overlay hidden"></div>
        <!-- Modal Overlay-->
        <div class="wrapper">
          <section class="actions">
            <h1>Action Buttons</h1>
          </section>
  
          <section class="scheduler">
            <section class="panel viewer">
              <h1 id="schedule-viewer-header">Schedule Viewer</h1>
              <hr />
  
              <div class="viewer-action-buttons">
                <div class="overlay hidden"></div>
                <button type="button" id="btn-open-modal" class="btn btn-primary btn-open-modal">
                  Add Schedule
                </button>
                <button type="button" class="btn btn-danger btn-delete-schedule">
                  Delete Schedule
                </button>
              </div>
              <!--Add Schedule Modal: Start-->
              <section class="modal hidden">
                <div class="modal-title">
                  <h1>Add Schedule</h1>
                  <button class="btn-close-modal">X</button>
                </div>
                <form action="" class="schedule-form">
                  <div class="input-group">
                    <label for="input-schedule-name">Schedule Name</label>
                    <input
                      type="text"
                      id="input-schedule-name"
                      name="schedule-name"
                    />
                  </div>
                  <h3>Operations</h3>
                  <div class="input-group">
                    <label for="nr-operations">Select Number of Operations</label>
                    <select
                      name="nr-operations"
                      id="nr-operations"
                      class="select-nr-operations"
                    >
                      <option value="">-- Operations --</option>
                      <option value="1">1</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div class="schedule-form-dynamic-content"></div>
                  <button type="submit" id="btn-submit-form" class="btn">
                    Add New Schedule
                  </button>
                </form>
              </section>
              <!--Add Schedule Modal: End-->
              <div class="viewer-schedule">
                <h4 class="h5">Schedules List</h4>
                <div class="viewer-schedule-list"></div>
              </div>
            </section>
            <section class="panel editor">
              <h1>Schedule Editor</h1>
              <hr />
              <div class="editor-schedule-name-container">
                <h4 class="h5">Schedule Name:</h4>
                <span class="editor-schedule-name"></span>
              </div>
              <div class="editor-schedule"></div>
            </section>
          </section>
          <section>
            <div>
              <span class="message message-success"></span>
            </div>
            <div>
              <span class="message message-error"></span>
            </div>
            <div>
              <span class="message message-warning"></span>
            </div>
          </section>
        </div>
      </main>
    </body>
  `;
}

export function setupWithSchedules() {
  setup();
  displaySchedulesNames(schedules);
  attachEventHandlerOnViewScheduleNames();
  const user = userEvent.setup();
  return user;
}

export async function setupWithModal() {
  setup();
  const user = userEvent.setup();
  const addScheduleButton = document.querySelector(
    "#btn-open-modal"
  ) as HTMLButtonElement;
  await user.click(addScheduleButton);
  return user;
}
