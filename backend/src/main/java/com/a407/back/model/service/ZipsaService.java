package com.a407.back.model.service;

import com.a407.back.domain.Zipsa;
import com.a407.back.dto.room.PublicRoomListResponse;
import com.a407.back.dto.util.RecordResponse;
import com.a407.back.dto.zipsa.PublicRoomNotificationRequest;
import com.a407.back.dto.zipsa.ReportSearchResponse;
import com.a407.back.dto.zipsa.ZipsaDetailInfoResponse;
import com.a407.back.dto.zipsa.ZipsaInfoResponse;
import com.a407.back.dto.zipsa.ZipsaRecordsResponse;
import com.a407.back.dto.zipsa.ZipsaReservationResponse;
import com.a407.back.dto.zipsa.ZipsaReviewResponse;
import com.a407.back.dto.zipsa.ZipsaStatusResponse;
import java.io.IOException;
import java.util.List;
import org.springframework.web.multipart.MultipartFile;

public interface ZipsaService {

    void makeReport(Long roomId, MultipartFile image, String content) throws IOException;

    List<ReportSearchResponse> findReportByRoomIdList(Long roomId);

    ZipsaDetailInfoResponse findZipsaDetailFindByZipsaId(Long zipsaId);

    ZipsaInfoResponse findZipsaFindByZipsaId(Long zipsaId);

    List<ZipsaReviewResponse> findsZipsaReviewFindByZipsaId(Long zipsaId);

    Zipsa findByZipsaId(Long zipsaId);

    List<RecordResponse> getZipsaRecordList(Long helperId);

    ZipsaRecordsResponse getZipsaRecordInfo(Long roomId);

    List<ZipsaReservationResponse> getZipsaReservationList(Long zipsaId);

    void makePublicRoomNotification(PublicRoomNotificationRequest publicRoomNotificationRequest);

    PublicRoomListResponse getPublicRoomList(int page, int size);

    void changeZipsaStatus(Long zipsaId);

    ZipsaStatusResponse getZipsaWorkStatus(Long zipsaId);
}
