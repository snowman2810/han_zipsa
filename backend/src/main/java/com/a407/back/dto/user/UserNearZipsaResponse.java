package com.a407.back.dto.user;

import com.a407.back.domain.User.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserNearZipsaResponse {

    private String name;
    private Gender gender;
    private String gradeName;
    private String description;
    private String preferTag;
    private Long zipsaId;
    private double lat;
    private double lng;

}
