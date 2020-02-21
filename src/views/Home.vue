<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <br />

    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideAlertMethod()">Alert</Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideTableMethod()"> Table </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideLinksMethod()"> Links </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideButtonMethod()"> Buttons </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideMediaListMethod()"> Media List </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideCardMethod()"> Card </Button>
    <button type="button" class="btn btn-secondary mr-2" data-toggle="modal" data-target="#exampleModal">
      open modal
    </button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideProgressBarMethod()"> Progress Bar </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideLoadingMethod()"> Loading </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideAccordionMethod()"> Accordion </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideStatMethod()"> Stat </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideNoDataFoundMethod()"> Message (No Data Found) </Button>
    <Button type="button" class="btn btn-secondary mr-2" @click.prevent="hideErrorMessageMethod()"> Error Message (Authentication) </Button>
    <br />
    <br />
    <!-- Alert Component -->
    <UIFireAlarmTray v-if="hideAlert" x="center" y="bottom">
      <template>
      <UIFireAlarm title="We're having some trouble." type="danger" @close="close" time="1000">
          Hang in there. We're working on fixing this now.
      </UIFireAlarm>
        <UIFireAlarm title="We're having some trouble." type="success" @close="close" time="2000">
          Hang in there. We're working on fixing this now.
        </UIFireAlarm>
        <UIFireAlarm title="We're having some trouble." type="success" @close="close">
          Hang in there. We're working on fixing this now.
        </UIFireAlarm>
        <UIFireAlarm title="We're having some trouble." type="success" @close="close">
          Hang in there. We're working on fixing this now.
        </UIFireAlarm>
        <UIFireAlarm title="We're having some trouble." type="success" @close="close">
          Hang in there. We're working on fixing this now.
        </UIFireAlarm>
      </template>
    </UIFireAlarmTray>

    <!-- Alert Component -->

    <!---Table Component --->
    <UITable v-if="hideTable">
      <template slot="thead">
        <tr><th v-for="th in table.thead">{{ th }}</th></tr>
      </template>
      <template slot="tbody">
        <tr v-for="td in table.tbody">
          <td>{{td.name}}</td>
          <td>{{td.responsible_person}}</td>
          <td>{{td.status}}</td>
          <td>{{td.updated_at}}</td>
        </tr>
      </template>
    </UITable>
    <!--- Table Component --->

    <!--- Links -->
    <UILinks text="Text link" href="https://google.com" :external="true" color="red" fontSize="14px" v-if="hideLinks" />
    <br/><br/>

    <!----Button --->
    <UIButton class_name="danger button_class" :disabled="false" v-if="hideButton">
      Primary idle
    </UIButton>

    <!---- UITile ----->
    <UIMediaList
      title="List-based media object"
      media_url="https://five.epicollect.net/api/internal/media/ec5-demo-project?type=photo&name=logo.jpg&format=project_thumb"
      v-if="hideMediaList"
    >
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
    </UIMediaList>

    <!--- UICards --->

    <UICard :shadow="true"  v-if="hideCard">
      <template slot="header"><div class="card-header">Header</div></template>
      <template slot="body">
        <div class="card-body text">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </template>
    </UICard>

    <UICard :shadow="true"  v-if="hideCard">
      <template slot="header"><div class="card-header">Card With Table View Example</div></template>
      <template slot="body">
      <UITable>
        <template slot="thead">
          <tr><th v-for="th in table.thead">{{ th }}</th></tr>
        </template>
        <template slot="tbody">
          <tr v-for="td in table.tbody">
            <td>{{td.name}}</td>
            <td>{{td.responsible_person}}</td>
            <td>{{td.status}}</td>
            <td>{{td.updated_at}}</td>
          </tr>
        </template>
      </UITable>
      </template>
    </UICard>

    <!-- UI Confirm modal--->
    <UIConfirmModal id="exampleModal" title="Modal title" custom_class="modal-xl" @save="saveChange()" save_button_text="Save Changes">
      <UITable>
        <template slot="thead">
          <tr><th v-for="th in table.thead">{{ th }}</th></tr>
        </template>
        <template slot="tbody">
          <tr v-for="td in table.tbody">
            <td>{{td.name}}</td>
            <td>{{td.responsible_person}}</td>
            <td>{{td.status}}</td>
            <td>{{td.updated_at}}</td>
          </tr>
        </template>
      </UITable>
    </UIConfirmModal>

    <!--- UI Progress Bar --->
    <UIProgressBar percentage="25" custom_class="progress_bar" v-if="hideProgressBar" color="info" />

    <!-- UI Loading --->
    <UILoading v-if="hideLoading" />

    <!-- UI Accordion -->
    <UIAccordion id="headingOne" v-if="hideAccordion">
      <template slot="header">Collapse Accordion</template>
      <template slot="body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </template>
    </UIAccordion>

    <!--- State -->
    <UIWell v-if="hideState">
      <UIState title="Contacts from search" numbers="300%">
        <template slot="link">
          <UILinks text="Text link" href="https://google.com" :external="true" color="red" fontSize="14px" />
          </template>
        <template slot="help_text">
          <div class="help_text">
            FEB 12 - FEB 28
          </div>
        </template>
      </UIState>
      <UIState title="Conversion rate" numbers="50%">
        <template slot="link">
          <UILinks text="Rate link" href="https://google.com" :external="true" color="green" fontSize="14px" />
        </template>
        <template slot="help_text">
          <div class="help_text">
            NOV 12 - FEB 28
          </div>
        </template>
      </UIState>
      <UIState title="Contacts Gathered" numbers="10,567">
        <template slot="link">
          <UILinks text="Text link" href="https://google.com" :external="true" color="red" fontSize="14px" />
        </template>
        <template slot="help_text">
          <div class="help_text">
            JAN 12 - FEB 28
          </div>
        </template>
      </UIState>
      <UIState title="Without link" numbers="90.210">
        <template slot="link">
          <UILinks text="Text link" href="https://google.com" :external="true" color="red" fontSize="14px" />
        </template>
        <template slot="help_text">
          <div class="help_text">
            MAR 12 - FEB 28
          </div>
        </template>
      </UIState>
    </UIWell>

    <!--- No data found --->
    <UINotFoundMessage text="No Data Found" v-if="hideMessage" />

    <!--- Error Message View--->
    <UIErrorMessage message="You're not allowed in here." v-if="hideErrorMessage">
      Please provide some text here, <UILinks text="Click here" href="https://google.com" :external="true" color="red" fontSize="14px" />
    </UIErrorMessage>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      hideAlert: false,
      hideTable: false,
      hideLinks: false,
      hideButton: false,
      hideMediaList: false,
      hideCard: false,
      hideLoading: false,
      hideProgressBar: false,
      hideAccordion: false,
      hideState: false,
      hideMessage: false,
      hideErrorMessage: false,
      table: {
        thead: ["Name", "Responsible Person", "Status", "Unlocked At"],
        tbody: [
          {name: "Aschraf Husain", responsible_person:"Annika Stern", status: "Eingeladen", updated_at: "5 months ago"},
          {name: "Ajlen Dizdarevic", responsible_person:"Annika Stern", status: "Im Prozess", updated_at: "5 months ago"},
          {name: "Susanne Zabsky", responsible_person:"Annika Stern", status: "Eingeladen", updated_at: "5 months ago"},
          {name: "Kira Salla", responsible_person:"Annika Stern", status: "Eingeladen", updated_at: "5 months ago"},
          {name: "Quirico Berude", responsible_person:"Annika Stern", status: "Im Prozess", updated_at: "5 months ago"},
        ]
      }
    };
  },
  methods: {
    close() {
      console.log("Console");
    },
    hideAlertMethod() {
      this.hideAlert = !this.hideAlert;
    },
    hideTableMethod() {
      this.hideTable = !this.hideTable;
    },
    hideLinksMethod() {
      this.hideLinks = !this.hideLinks;
    },
    hideButtonMethod() {
      this.hideButton = !this.hideButton;
    },
    hideMediaListMethod() {
      this.hideMediaList = !this.hideMediaList;
    },
    hideCardMethod() {
      this.hideCard = !this.hideCard;
    },
    hideProgressBarMethod() {
      this.hideProgressBar = !this.hideProgressBar;
    },
    hideLoadingMethod() {
      this.hideLoading = !this.hideLoading;
    },
    hideAccordionMethod() {
      this.hideAccordion = !this.hideAccordion;
    },
    hideStatMethod() {
      this.hideState = !this.hideState;
    },
    hideNoDataFoundMethod() {
      this.hideMessage = !this.hideMessage;
    },
    hideErrorMessageMethod(){
      this.hideErrorMessage = !this.hideErrorMessage;
    },
    saveChange() {
      console.log('Save')
    }
  }
};
</script>
