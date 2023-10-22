import { Component, OnInit } from '@angular/core';
import { goalListService } from '../../../core/services/goalList.service';

interface FilterOption {
  title: string;
  dataList: IOption[];
  selected: boolean;
}
interface IOption {
  optionName: string;
  checked: boolean;
}

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
})
export class FilterOPtionsComponent implements OnInit {
  filterOptionsList: FilterOption[] = [
    { title: 'Select Title', dataList: [], selected: false },
    { title: 'Select Category', dataList: [], selected: false },
    { title: 'Select Department', dataList: [], selected: false },
    { title: 'Select state', dataList: [], selected: false },
    { title: 'Select Owner', dataList: [], selected: false },
  ];
  checkBoxColor: string = '#3CD2A5';

  constructor(private _goalListsevice: goalListService) {}

  ngOnInit(): void {
    this._goalListsevice.getList().subscribe((data) => {
      data.map((elem) => {
        this.filterOptionsList[0].dataList.push({
          optionName: elem.title,
          checked: false,
        });
        this.filterOptionsList[1].dataList.push({
          optionName: elem.category,
          checked: false,
        });
        this.filterOptionsList[2].dataList.push({
          optionName: elem.department,
          checked: false,
        });
        this.filterOptionsList[3].dataList.push({
          optionName: elem.state,
          checked: false,
        });
        this.filterOptionsList[4].dataList.push({
          optionName: elem.owner,
          checked: false,
        });
      });
      console.log(this.filterOptionsList[0].dataList);
      // this.filterOptionsList[0].dataList = [
      //   ...new Set(data.map((elem) => elem.title)),
      // ];
      // this.filterOptionsList[1].dataList = [
      //   ...new Set(data.map((elem) => elem.category)),
      // ];
      // this.filterOptionsList[2].dataList = [
      //   ...new Set(data.map((elem) => elem.department)),
      // ];
      // this.filterOptionsList[3].dataList = [
      //   ...new Set(data.map((elem) => elem.state)),
      // ];
      // this.filterOptionsList[4].dataList = [
      //   ...new Set(data.map((elem) => elem.owner)),
      // ];
    });
  }
  selectedOptions: string[] = [];

  updateDropdownTitle(item: FilterOption): string {
    const selectedCount = this.selectedOptions.filter((option) =>
      item.dataList.map((elem) => elem.checked)
    ).length;

    this.updateOptionsListSelection(item, selectedCount);
    const optionsCount = item.dataList.length;
    if (selectedCount === 0) {
      return item.title;
    } else if (selectedCount === optionsCount) {
      return 'All ' + item.title;
    } else if (selectedCount < optionsCount && selectedCount > 1) {
      return 'Multiple selected';
    } else {
      return `item selected`;
    }
  }

  onFilterOptionSelect(event: any, option: string): void {
    const selectedOption = this.filterOptionsList.find((item) =>
      item.dataList.map((elem) => elem.checked)
    );

    if (event.checked) {
      this.selectedOptions.push(option);
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index > -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }
  updateOptionsListSelection(item: FilterOption, optionSelected: any) {
    optionSelected > 0 ? (item.selected = true) : (item.selected = false);
  }
  allComplete: boolean = false;

  updateAllComplete(item: any) {
    this.allComplete =
      item.dataList != null && item.dataList.every((t) => t.checked);
  }

  someComplete(item: FilterOption): boolean {
    if (item.dataList == null) {
      return false;
    }
    return (
      item.dataList.filter((t) => t.checked).length > 0 && !this.allComplete
    );
  }

  setAll(completed: boolean, item: FilterOption) {
    this.allComplete = completed;
    if (item.dataList == null) {
      return;
    }
    item.dataList.forEach((t) => (t.checked = true));
  }
}
