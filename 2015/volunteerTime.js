$('.odometer').each(function (i, el) {
  setTimeout((function ($el) {
    return function () {
      $el.html($el.attr('data-time'));
    }
  })($(el)), i * 500);
});


// This is how the volunteer time was estimated

// fetch('http://sparktime.org/shifts.json?org_id=11')
//   .then(res => res.json())
//   .then(data => {
//     var shifts = data.shifts;
//     var startDate = (new Date('August 15, 2015')).valueOf();
//     var endOfYear = (new Date('December 31, 2015')).valueOf();
//     var beginningOfYear = (new Date('January 1, 2015')).valueOf();
//     var ignoreTimesGreaterThan = 20;
//     window.totalHours = shifts.reduce((sum, shift) => sum + shift.duration / 60 / 60, 0);
//     window.filteredHours = shifts
//       .filter(shift => shift.duration < ignoreTimesGreaterThan * 60 * 60 && shift.start > startDate)
//       .reduce((sum, shift) => sum + shift.duration / 60 / 60, 0);
//     window.estimatedYearHours = window.filteredHours * (endOfYear - beginningOfYear) / (endOfYear - startDate);
//
//   })
