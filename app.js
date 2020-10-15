Vue.createApp({
  data() {
    return {
      taskItem: '',
      taskList: [],
      showCondition: true,
    };
  },
  computed: {
    renderShow() {
      if (this.showCondition) {
        return 'Hide';
      }
      return 'Show';
    },
  },
  methods: {
    addTask() {
      if (this.taskItem !== '') {
        this.taskList.push(this.taskItem);
        this.taskItem = '';
      }
    },
    show() {
      this.showCondition = !this.showCondition;
    },
  },
}).mount('#assignment');
