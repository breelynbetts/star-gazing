

## Breelyn Betts

##### https://github.com/lmu-cmsi370-fall2019/front-end-development-breelynbetts

| | Feedback | Points |
| --- | --- | ---: |
| **Model Implementation** | Component structure is fairly understandable once the folder structure is figured out. Proper rendering of mock results. However, the map on the events page would not load, and threw this error _Google Maps JavaScript API error: InvalidKeyMapError_. (-1) | 19/20 |
| **View Implementation** | Highly stylized; approachable, functional layout; sensible view decomposition; clean CSS separation<br><br>Found several inline styles that are not justified. See _Map.js_ and _NavBar.js_.  (-2) | 23/25 |
| **Controller Implementation** | Overall correct MVC flow | 25/25 |
| **API Stubs/Mocks** | API calls mocked and properly structured/used | 10/10 |
| **Test Suite** | 24 successes out of 26 total<br><br>**Statements** 110/114 (96.49%)<br>**Branches** 15/22 (68.18%)<br>**Functions** 40/50 (80.00%)<br>**Lines** 93/103 (90.29%)<br><br>Good overall coverage, however _api.js_ had higher coverage than expected: when the real implementation comes in, this means that your tests will be making real requests—no deduction for the placeholder version but we’ll see what happens with the real API. <br><br>Map.js is also undercovered but this is understandably tricky due to the involvement of a third-party library.<br><br>A few fixable warnings were encountered—ideally these are addressed. Inclusion in `act` is documented on the React website and shown in the starter code; the use of a `key` prop is standard when rendering an array. (–1)<br><br>Finally, snapshot test failures are noted in `DateSelector` because the component is dependent on today’s date—a snapshot that requires constant updating/committing is difficult to maintain. Either the code should be refactored so that the `max` date can be adjusted directly, or the test should be converted to a non-snapshot where assertions can be made based on today’s date as well. (–1) | 18/20 |
| **Linting** | No linting issues |  |
| **Version Control** | Good commit frequency and granularity; descriptive messages |  |
| **Punctuality** | First commit on 10/01 10:05am; last commit on 11/26 4:41pm—accommodation granted for quick correction to placeholder data structure |  |
|  | **Total** | **95/100** |
